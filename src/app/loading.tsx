import { Spinner } from "@nextui-org/react";

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="w-full h-screen flex justify-center items-center bg-petBlue/60 fixed top-0 left-0">
            <Spinner />
        </div>
    )
}