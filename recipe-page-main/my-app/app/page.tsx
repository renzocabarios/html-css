import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-neutral-400">
      <div className="max-w-96 flex flex-col gap-10 bg-white p-4">
        <p className="text-3xl font-semibold">Simple Omelette Recipe</p>
        <p className="text-gray-500">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines neate eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats
        </p>

        <div className="bg-purple-50 py-10 px-10 flex flex-col gap-2">
          <p className="text-xl font-semibold text-purple-700">
            Preparation time
          </p>
          <ul className="list-disc marker:text-purple-700 flex flex-col gap-2">
            <li>
              <p className="text-gray-500">
                <span className="font-semibold text-black">Total</span>:
                Approximately 10 minutes
              </p>
            </li>
            <li>
              <p className="text-gray-500">
                <span className="font-semibold text-black">Preparation</span>: 5
                minutes
              </p>
            </li>
            <li>
              <p className="text-gray-500">
                <span className="font-semibold text-black">Cooking</span>: 5
                minutes
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 p-5">
          <p className="text-2xl font-semibold text-stone-500">Ingredients</p>
          <ul className="list-disc flex flex-col gap-2 marker:text-stone-500">
            <li className="text-gray-500">2-3 large eggs</li>
            <li className="text-gray-500">Salt, to taste</li>
            <li className="text-gray-500">Pepper, to taste</li>
            <li className="text-gray-500">1 tablespoon of butter or oil</li>
            <li className="text-gray-500">
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 p-5">
          <p className="text-2xl font-semibold text-stone-500">Instructions</p>
          <ol className="list-decimal flex flex-col gap-2 marker:text-stone-500">
            <li>
              <span className="font-semibold">Beat the eggs</span>: 2-3 large
              eggs
            </li>
            <li>
              <span className="font-semibold">Heat the pan</span>: 2-3 large
              eggs
            </li>
            <li>
              <span className="font-semibold">Cook the omelette</span>: 2-3
              large eggs
            </li>
            <li>
              <span className="font-semibold">Add fillings (optional)</span>:
              2-3 large eggs
            </li>
            <li>
              <span className="font-semibold">Fold and serve</span>: 2-3 large
              eggs
            </li>
            <li>
              <span className="font-semibold">Enjoy</span>: 2-3 large eggs
            </li>
          </ol>
        </div>

        <div className="">
          <p className="text-2xl font-semibold text-stone-500">Instructions</p>

          <p>
            The table below shows nutritional values per serving without the
            additional fillings
          </p>
          <table className="w-full">
            <tbody>
              <tr className=" border-b-2 ">
                <td className="p-5">
                  <p className="text-gray-500">Calories</p>
                </td>
                <td>
                  <p>277kcal</p>
                </td>
              </tr>

              <tr className="border-b-2">
                <td className="p-5">
                  <p className="text-gray-500">Carbs</p>
                </td>
                <td>
                  <p>0g</p>
                </td>
              </tr>

              <tr className="border-b-2">
                <td className="p-5">
                  <p className="text-gray-500">Protein</p>
                </td>
                <td>
                  <p>20g</p>
                </td>
              </tr>

              <tr className="border-b-2">
                <td className="p-5">
                  <p className="text-gray-500">Fat</p>
                </td>
                <td>
                  <p>22g</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
