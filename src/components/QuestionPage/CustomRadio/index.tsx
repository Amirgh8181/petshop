"use client"

interface radio {
    Score: number,
    title: string,
    number: number,
    disable: boolean
    handleQuestion: (arg: number) => void
}

export const CustomRadio = ({ Score, title, number, disable, handleQuestion }: radio) => {


    return (
        <button onClick={() => handleQuestion(Score)} disabled={disable}
            className="group inline-flex items-center hover:bg-petBlue hover:text-white w-full
         cursor-pointer border-2 border-petBlue rounded-3xl shadow-lg shadow-default-300  gap-6 px-4 py-2
          transition-all duration-400"
        >
            <span className="w-10 aspect-square rounded-full flex justify-center items-center bg-white text-petBlue border-2 border-petBlue">{number}</span>
            <span className="text-lg">{title}</span>

        </button>
    );
};