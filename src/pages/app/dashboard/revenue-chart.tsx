import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import colors from "tailwindcss/colors";

import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import { Label } from "@/components/ui/label";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useMemo, useState } from "react";
import type { DateRange } from "react-day-picker";
import {subDays} from 'date-fns'
import { Loader2 } from "lucide-react";

export function RevenueChart() {

  //DateRange é um vetor com um intervalor de datas
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    //pega a data atual e subtrai 7 dias
    from: subDays(new Date(), 7),
    to: new Date()
  })

  const { data: dailyRevenueInPeriod } = useQuery({
    queryFn: () => getDailyRevenueInPeriod({
      from: dateRange?.from,
      to: dateRange?.to
    }),
    queryKey: ["metrics", "daily-revenue-in-period", dateRange],
  });

  //sempre que dailyRevenueInPeriod mudar, calcula e devolve os valores formatados para o eixo do gráfico
  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map(chartItem => {
      return {
        date: chartItem.date,
        receipt: chartItem.receipt/100
      }
    })
  }, [dailyRevenueInPeriod])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label>Período</Label>
          <DateRangePicker date={dateRange} onDateChange={setDateRange}/>
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod ? (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
              <YAxis
                stroke="#888"
                axisLine={false}
                tickLine={false}
                tickFormatter={(value: number) =>
                  value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                }
                width={80}
              />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                type="linear"
                strokeWidth={2}
                dataKey="receipt"
                stroke={colors.violet[500]}
              />
            </LineChart>
          </ResponsiveContainer>
        ):(
          //div com o mesmo tamanho do gráfico para nao ter problemas de layout
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
