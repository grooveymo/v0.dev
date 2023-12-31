import { DashBoard } from '@/components/dash-board';
import { InvoiceTable } from '@/components/invoice-table';
import { ITRequestForm } from '@/components/itrequest-form';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>IT Request Form generation</h1>
      </div>
      <ITRequestForm />

      <InvoiceTable />

      <DashBoard />
    </main>
  );
}
