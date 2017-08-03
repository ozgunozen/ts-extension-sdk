import { DataGridCellContainer } from "../../data/DataGridCellContainer";

export interface IMenuItemAction {
    (selectedData: DataGridCellContainer[], allData: DataGridCellContainer[]): void;
}
