import { useState } from "react";
import DynamicInput from "react-dynamic-inputs";

function App() {
    const [inputValues, setInputValues] = useState([]);
    const [customInputValues, setCustomInputValues] = useState([]);

    return (
        <div className="grid grid-rows-2 gap-10 h-screen px-10 py-10">
            <div className="grid grid-cols-2 gap-10 mb-10">
                <div>
                    <h2 className="text-2xl font-bold text-center">
                        React Dynamic Inputs
                    </h2>
                    <p className="text-center text-gray-500 mb-4">
                        (Default Inputs)
                    </p>
                    <div className="flex justify-center items-center">
                        <DynamicInput
                            onChange={setInputValues}
                            defaultItems={3}
                            minItems={1}
                            maxItems={5}
                            addButtonLabel="Add More"
                            className="w-lg"
                        />
                    </div>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold text-center">Results</h3>
                    <p className="text-center text-gray-500 mb-4">
                        (Default Inputs)
                    </p>
                    <ol className="list-decimal list-inside">
                        {inputValues.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ol>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mb-10">
                <div>
                    <h2 className="text-2xl font-bold text-center">
                        React Dynamic Inputs
                    </h2>
                    <p className="text-center text-gray-500 mb-4">
                        (Custom Inputs)
                    </p>
                    <div className="flex justify-center items-center">
                        <DynamicInput
                            onChange={setCustomInputValues}
                            customAddButton={
                                <button className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 cursor-pointer mx-auto block disabled:pointer-events-none disabled:opacity-50">
                                    Add More
                                </button>
                            }
                            defaultItems={2}
                            minItems={1}
                            maxItems={5}
                            className="w-lg"
                        >
                            {(inputProps, removeButtonProps) => (
                                <div className="flex items-center justify-center gap-2 w-full">
                                    <input
                                        {...inputProps}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 flex-1"
                                    />
                                    <button
                                        {...removeButtonProps}
                                        className="w-6 h-6 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        X
                                    </button>
                                </div>
                            )}
                        </DynamicInput>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-2xl font-bold text-center">Results</h3>
                    <p className="text-center text-gray-500 mb-4">
                        (Custom Inputs)
                    </p>
                    <ol className="list-decimal list-inside">
                        {customInputValues.map((value, index) => (
                            <li key={index}>{value}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default App;
