import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Tag from './Tag'
import Button from './Button'

export function ServicesNavItems() {
  return (
    <Tabs defaultValue="account" className="w-ful">
      <TabsList className="grid w-full grid-cols-3 bg-transparent gap-2 mb-9">
        <TabsTrigger
          className="uppercase font-bold bg-lime-400 md:text-lg lg:text-xl p-4"
          value="starter"
        >
          starter plan
        </TabsTrigger>
        <TabsTrigger
          className="uppercase font-bold bg-lime-400 md:text-lg lg:text-xl p-4"
          value="pro"
        >
          Pro plan
        </TabsTrigger>
        <TabsTrigger
          className="uppercase font-bold bg-lime-400 md:text-lg lg:text-xl p-4"
          value="elite"
        >
          Elite plan
        </TabsTrigger>
      </TabsList>
      <TabsContent className="" value="starter">
        <Card className="bg-transparent text-lime-400">
          <CardHeader>
            <CardTitle className="uppercase font-bold">starter plan</CardTitle>
            <CardDescription>
              Fully tailored solutions for businesses, startups, and individuals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Tag>Custom Design</Tag>
              </li>
              <li>
                <Tag>Responsive Design</Tag>
              </li>
              <li>
                <Tag>No SEO Optimization</Tag>
              </li>
              <li>
                <Tag>no Performance Tuning</Tag>
              </li>
              <li>
                <Tag>Maintenance just for one month</Tag>
              </li>
              <li>
                <Tag>for beginners only</Tag>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Buy now for $2,000</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent className="" value="pro">
        <Card className="bg-transparent text-lime-400">
          <CardHeader>
            <CardTitle className="uppercase font-bold">Pro plan</CardTitle>
            <CardDescription>
              Fully tailored solutions for businesses, startups, and individuals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Tag>Custom Design</Tag>
              </li>
              <li>
                <Tag>Responsive Design</Tag>
              </li>
              <li>
                <Tag>SEO Optimization</Tag>
              </li>
              <li>
                <Tag>advanced Performance Tuning</Tag>
              </li>
              <li>
                <Tag>Maintenance for 6 months</Tag>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Buy now for $4,500</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent className="" value="elite">
        <Card className="bg-transparent text-lime-400">
          <CardHeader>
            <CardTitle className="uppercase font-bold">Elite plan</CardTitle>
            <CardDescription>
              Fully tailored solutions for businesses, startups, and individuals
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="flex flex-col space-y-2">
              <li>
                <Tag>premium Custom Design</Tag>
              </li>
              <li>
                <Tag>Responsive Design</Tag>
              </li>
              <li>
                <Tag>advanced SEO Optimization</Tag>
              </li>
              <li>
                <Tag>ultra Performance Tuning</Tag>
              </li>
              <li>
                <Tag>Maintenance for 12 months</Tag>
              </li>
              <li>
                <Tag>epic E-Commerce Features</Tag>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Buy now for $8,000</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
