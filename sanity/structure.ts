import type { StructureResolver } from 'sanity/structure'
import { RevenueStatsPane } from "./components/RevenueStatsPane"

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...S.documentTypeListItems(), // hiện tất cả schema documents mặc định
      S.divider(),
      S.listItem()
        .title('📈 Thống kê doanh thu')
        .child(
          S.component({
            id: 'revenue-stats-pane',
            title: 'Tổng doanh thu',
            component: RevenueStatsPane,
          })
        ),
    ])
