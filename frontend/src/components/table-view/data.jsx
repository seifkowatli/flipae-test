import { TableActions } from './partials';

export const getTableActions = (t, entityActionsProps) => ({
  field: 'actions',
  headerName: t({ id: 'table.actions' }),
  width: 200,
  renderCell: ({ ...props }) => (
    <TableActions {...props} {...entityActionsProps} />
  ),
});

export const localeText = t => ({
  toolbarExport: t({ id: 'table.export' }),
  toolbarExportCSV: t({ id: 'table.export-csv' }),
  toolbarExportPrint: t({ id: 'table.print' }),
  toolbarDensity: t({ id: 'table.density' }),
  toolbarDensityCompact: t({ id: 'table.compact' }),
  toolbarDensityStandard: t({ id: 'table.standard' }),
  toolbarDensityComfortable: t({ id: 'table.comfortable' }),
  toolbarQuickFilterPlaceholder: t({ id: 'table.search' }),
  columnsPanelShowAllButton: t({ id: 'table.show-all' }),
  columnsPanelHideAllButton: t({ id: 'table.hide-all' }),
  columnsPanelTextFieldLabel: t({ id: 'table.find-column' }),
  toolbarColumns: t({ id: 'table.columns' }),
  columnsPanelTextFieldPlaceholder: t({ id: 'table.columns-title' }),
  footerTotalRows: t({ id: 'table.total-rows' }),
});
