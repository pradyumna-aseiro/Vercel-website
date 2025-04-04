export default function VisionBoxTable() {
    return (
      <div className="overflow-x-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Vision Box Comparison</h2>
        <table className="table-auto w-full border border-gray-300 text-sm">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="px-4 py-2">Model</th>
              <th className="px-4 py-2">Processor</th>
              <th className="px-4 py-2">Interfaces</th>
              <th className="px-4 py-2">Key Features</th>
              <th className="px-4 py-2">Applications</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium">VC2000</td>
              <td className="px-4 py-2">Intel chip</td>
              <td className="px-4 py-2">Gigabit, IO, Serial</td>
              <td className="px-4 py-2">Compact, multi-camera</td>
              <td className="px-4 py-2">Basic inspections</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium">VC3000</td>
              <td className="px-4 py-2">Advanced IPC</td>
              <td className="px-4 py-2">Control & data interfaces</td>
              <td className="px-4 py-2">High compatibility</td>
              <td className="px-4 py-2">Measurement, positioning</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium">VC5000</td>
              <td className="px-4 py-2">Intel 12th Gen</td>
              <td className="px-4 py-2">PCIe, AI ready</td>
              <td className="px-4 py-2">Modular, high throughput</td>
              <td className="px-4 py-2">AI, multi-station vision</td>
            </tr>
            <tr className="border-t">
              <td className="px-4 py-2 font-medium">VT2000</td>
              <td className="px-4 py-2">Intel + Touch UI</td>
              <td className="px-4 py-2">All-in-one design</td>
              <td className="px-4 py-2">Touch screen control</td>
              <td className="px-4 py-2">Interactive inspection</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  