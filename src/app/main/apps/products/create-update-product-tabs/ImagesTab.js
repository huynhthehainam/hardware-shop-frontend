import { orange } from '@mui/material/colors';
import { Icon } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import _ from 'lodash';
import FuseUtils from '@fuse/utils/FuseUtils';
import { useDispatch, useSelector } from 'react-redux';
import constants from '../constants';
import { uploadImage } from '../store/newUpdateProduct';

const Root = styled('div')(({ theme }) => {
  return {
    '& .productImageFeaturedStar': {
      position: 'absolute',
      top: 0,
      right: 0,
      color: orange[400],
      opacity: 0,
    },
    '& .productImageRemoveButton': {
      position: 'absolute',
      top: 0,
      left: 0,
      opacity: 0,
    },
    '& .productImageUpload': {
      transitionProperty: 'box-shadow',
      transitionDuration: theme.transitions.duration.short,
      transitionTimingFunction: theme.transitions.easing.easeInOut,
    },

    '& .productImageItem': {
      transitionProperty: 'box-shadow',
      transitionDuration: theme.transitions.duration.short,
      transitionTimingFunction: theme.transitions.easing.easeInOut,

      '&:hover': {
        '& .productImageFeaturedStar': {
          opacity: 0.8,
        },
        '& .productImageRemoveButton': {
          opacity: 0.8,
        },
      },
      '&.featured': {
        // pointerEvents: 'none',
        boxShadow: theme.shadows[3],
        '& .productImageFeaturedStar': {
          opacity: 1,
        },
        // '&:hover .productImageFeaturedStar': {
        //   opacity: 1,
        // },
      },
    },
  };
});
const ImagesTab = () => {
  const formContext = useFormContext();
  const dispatch = useDispatch();
  const mode = useSelector(({ products }) => products.newUpdateProduct.mode);
  const { control, formState, watch, setValue, getValues, reset } = formContext;
  const imageUrls = watch('imageUrls');
  const productId = watch('id');
  return (
    <Root>
      <div className="flex justify-center sm:justify-start flex-wrap -mx-16">
        <Controller
          name="images"
          control={control}
          render={({ field }) => {
            return (
              <label
                htmlFor="button-file"
                className="productImageUpload flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer shadow hover:shadow-lg"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="button-file"
                  type="file"
                  multiple="multiple"
                  onChange={(e) => {
                    const { files } = e.target;
                    Object.keys(files).forEach((i) => {
                      const file = files[i];
                      file.myId = FuseUtils.generateGUID();
                    });
                    const promises = Object.keys(files).map((i) => {
                      return new Promise((resolve) => {
                        const file = files[i];
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const newImage = {
                            id: file.myId,
                            url: `data:${file.type};base64,${btoa(reader.result)}`,
                            type: 'image',
                          };
                          if (mode === constants.UPDATE_MODE) {
                            file.assetType = constants.SLIDE_ASSET_TYPE;
                            dispatch(uploadImage({ productId, image: file })).then(() => {
                              resolve(newImage);
                            });
                          }
                        };
                        reader.readAsBinaryString(file);
                      });
                    });
                    Promise.all(promises).then((values) => {
                      console.log('values', values);

                      setValue('imageUrls', [...getValues('imageUrls'), ...values]);
                    });

                    field.onChange([...files, ...field.value]);
                  }}
                />
                <Icon fontSize="large" color="action">
                  cloud_upload
                </Icon>
              </label>
            );
          }}
        />
        <Controller
          name="thumbnailId"
          control={control}
          render={({ field }) => {
            return imageUrls.map((media, index) => (
              <div
                onClick={() => {
                  field.onChange(media.id);
                }}
                onKeyDown={() => {}}
                role="button"
                tabIndex={0}
                className={clsx(
                  'productImageItem flex items-center justify-center relative w-128 h-128 rounded-16 mx-12 mb-24 overflow-hidden cursor-pointer outline-none shadow hover:shadow-lg',
                  media.id === field.value && 'featured'
                )}
                key={media.id}
              >
                <Icon className="productImageFeaturedStar">star</Icon>
                <Icon
                  onClick={() => {
                    const urls = getValues('imageUrls');
                    const images = getValues('images');
                    _.remove(urls, (e) => e.id === media.id);
                    _.remove(images, (e) => e.myId === media.id);
                    const removedUrls = [...urls];
                    const removedImages = [...images];
                    setValue('imageUrls', removedUrls);
                    setValue('images', removedImages);
                  }}
                  className="productImageRemoveButton text-red text-20 "
                >
                  cancel
                </Icon>
                <img className="max-w-none w-auto h-full" src={media.url} alt="product" />
              </div>
            ));
          }}
        />
      </div>
    </Root>
  );
};
export default ImagesTab;
