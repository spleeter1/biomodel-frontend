import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import fileStoreSlice from './fileStoreSlice';
import stringParamSlice from './stringParamSlice';
import urlStoreSlice from './urlStoreSlice';
import loadingSlice from './loadingSlice';
import fileKeysSlice from './fileKeysSlice';
import historyFileStoreSlice from './historyFileSlice';
import LoginStoreSlice from './loginStoreSlice';
import resultsStringSlice from './resultsStringSlice';
import VGPdiseasesSlice from './VGPdiseasesSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        fileStore: fileStoreSlice,
        stringParamStore: stringParamSlice,
        urlStore: urlStoreSlice,
        loadingStore: loadingSlice,
        fileKeysStore: fileKeysSlice,
        historyFileStore: historyFileStoreSlice,
        loginStore: LoginStoreSlice,
        resultsStringStore: resultsStringSlice,
        VGPdiseasesStore: VGPdiseasesSlice,
    },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
