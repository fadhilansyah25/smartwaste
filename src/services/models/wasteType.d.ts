declare namespace WasteTypeModels {
    export type WasteType = {
        id: number,
        name: string
    }

    export interface WasteTypeRepository {
        fetchAllWasteType(): Promise<WasteType[]>
    }

    export interface WasteUsecase {
        getAllWasteType(): Promise<WasteType[]>
    }
}