import { DataGridCell } from "./DataGridCell";

export class DataGridCellContainer {
    public cells: Array<DataGridCell>;
    public cellList: { [index: number]: DataGridCell };
    public rowIndex: number;
}
