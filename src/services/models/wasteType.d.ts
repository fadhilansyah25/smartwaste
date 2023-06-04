declare namespace WasteType {
    export type WasteType = {
        id: number,
        name: string
    }

    export interface Repository {
        fetchAllWasteType(): Promise<WasteType[]>
    }

    export interface Usecase {
        getAllWasteType(): Promise<WasteType[]>
    }
}