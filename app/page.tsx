'use client';

import { ChangeEvent, useState } from 'react';

export default function Home() {
  const [dec, setDec] = useState<string>('0');
  const [hex, setHex] = useState<string>('0');
  const [bin, setBin] = useState<string>('0');
  const [oct, setOct] = useState<string>('0');

  function handleDecChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    let parsed = parseInt(value);

    if (isNaN(parsed)) parsed = 0;

    setBin(parsed.toString(2));
    setOct(parsed.toString(8));
    setDec(value);
    setHex(parsed.toString(16));
  }

  function handleBinChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    let parsed = parseInt(value, 2);

    if (isNaN(parsed)) parsed = 0;

    setBin(value);
    setOct(parsed.toString(8));
    setDec(parsed.toString(10));
    setHex(parsed.toString(16));
  }

  function handleOctChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    let parsed = parseInt(value, 8);

    if (isNaN(parsed)) parsed = 0;

    setBin(parsed.toString(2));
    setOct(value);
    setDec(parsed.toString(10));
    setHex(parsed.toString(16));
  }

  function handleHexChange({ target: { value } }: ChangeEvent<HTMLInputElement>) {
    let parsed = parseInt(value, 16);

    if (isNaN(parsed)) parsed = 0;

    setBin(parsed.toString(2));
    setOct(parsed.toString(8));
    setDec(parsed.toString(10));
    setHex(value);
  }

  return (
    <main className="mt-48 h-screen flex flex-col gap-4 font-mono  items-center text-2xl">
      <label className="flex gap-2 items-center">
        <div className="uppercase  text-slate-700">Dec</div>
        <input
          className="border-2 rounded px-2 invalid:bg-red-200"
          type="text"
          value={dec}
          onChange={handleDecChange}
          pattern="[0-9]+"
        />
      </label>
      <label className="flex gap-2 items-center">
        <div className="uppercase  text-slate-400">Bin</div>
        <input
          className="border-2 rounded px-2 invalid:bg-red-200"
          type="text"
          value={bin}
          onChange={handleBinChange}
          pattern="[0-1]+"
        />
      </label>
      <label className="flex gap-2 items-center">
        <div className="uppercase  text-slate-400">Oct</div>
        <input
          className="border-2 rounded px-2 invalid:bg-red-200"
          type="text"
          value={oct}
          pattern="[0-7]+"
          onChange={handleOctChange}
        />
      </label>
      <label className="flex gap-2 items-center">
        <div className="uppercase  text-slate-400">Hex</div>
        <input
          className="border-2 rounded px-2 invalid:bg-red-200"
          type="text"
          value={hex}
          onChange={handleHexChange}
          pattern="[A-Fa-f0-9]+"
        />
      </label>
    </main>
  );
}
