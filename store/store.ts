import {createStore, persist} from 'easy-peasy';
import { mainModel, MainModel } from './models/mainModel';
import persistStorage from "./storage";

export type StoreModel = {
    mainModel: MainModel
}

export const store = createStore<StoreModel>({
    mainModel: persist(mainModel, {
        storage: persistStorage
    })
})