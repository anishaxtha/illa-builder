import { ReactComponent as StatisticWidgetIcon } from "@/assets/widgetCover/statistic.svg"
import i18n from "@/i18n/config"
import { RESIZE_DIRECTION, WidgetConfig } from "@/widgetLibrary/interface"

export const STATISTICS_WIDGET_CONFIG: WidgetConfig = {
  type: "STATISTIC_WIDGET",
  displayName: "statistic",
  widgetName: i18n.t("widget.statistics.name"),
  icon: <StatisticWidgetIcon />,
  keywords: ["Statistic", "数值"],
  sessionType: "PRESENTATION",
  w: 12,
  h: 6,
  resizeDirection: RESIZE_DIRECTION.HORIZONTAL,
  defaults: {
    label: "Label",
    colorScheme: "blue",
    positiveColorScheme: "blue",
    negativeColorScheme: "blue",
    hidden: false,
    textAlign: "start",
    primaryValue: "{{0}}",
    decimalPlace: "{{2}}",
  },
}
