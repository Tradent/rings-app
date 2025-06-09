import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactList } from "@/components/contacts/contact-list"
import { CreateContactButton } from "@/components/contacts/create-contact-button"
import { Filter, Search, SlidersHorizontal } from "lucide-react"

export default function ContactsPage() {
  return (
    <main className="flex min-h-screen flex-col p-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Contacts</h1>
        <CreateContactButton />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <Input placeholder="Search contacts..." className="pl-9 bg-slate-800/50 border-slate-700 text-white" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-700">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4 mb-8 bg-amber-500/90 text-slate-900 hover:bg-amber-500 border-amber-600">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="leads"
              className="data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
            >
              Leads
            </TabsTrigger>
            <TabsTrigger
              value="customers"
              className="data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
            >
              Customers
            </TabsTrigger>
            <TabsTrigger
              value="partners"
              className="data-[state=active]:bg-gold-400 data-[state=active]:text-slate-900 data-[state=active]:shadow-sm data-[state=active]:font-medium"
            >
              Partners
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ContactList filter="all" />
          </TabsContent>
          <TabsContent value="leads">
            <ContactList filter="lead" />
          </TabsContent>
          <TabsContent value="customers">
            <ContactList filter="customer" />
          </TabsContent>
          <TabsContent value="partners">
            <ContactList filter="partner" />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
