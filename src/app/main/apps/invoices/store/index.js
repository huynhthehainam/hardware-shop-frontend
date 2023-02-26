import { combineReducers } from '@reduxjs/toolkit';
import invoices from './invoicesSlice';
import createUpdateInvoice from './createUpdateInvoiceSlice';

export default combineReducers({ invoices, createUpdateInvoice });
