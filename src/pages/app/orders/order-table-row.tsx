import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export function OrderTableRow () {
    return (
        <TableRow>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        {/* sr-only = screen reader only */}
                        <span className="sr-only">Detalhe do pedido</span>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      df65s4f684sedgf8s
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      há 15 minutos
                    </TableCell>
                    <TableCell className="">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                        <span className="text-muted-foreground font-medium">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      Paulo Vinícius
                    </TableCell>
                    <TableCell className="font-medium">R$ 149,90</TableCell>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="mr-2 h-3 w-3" />
                        Aprovar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="xs">
                        <X className="mr-2 h-3 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
    )
}