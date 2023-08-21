import { HelloServer } from '@airbnb-clone/ui/server'

export default async function Index() {
  return <div className="flex w-screen h-screen">
    <HelloServer></HelloServer>
  </div>;
}
