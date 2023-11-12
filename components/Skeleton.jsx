const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm m-2`}
        >
            <div className="h-48 bg-white">
            </div>
            <div className="my-5 h-6 w-40 bg-gray-200 rounded-md" />
            <div className="w-full h-2 bg-gray-200 rounded-md my-1" />
            <div className="w-full h-2 bg-gray-200 rounded-md my-1" />
            <div className="w-full h-2 bg-gray-200 rounded-md my-1" />
            <div className="w-full h-2 bg-gray-200 rounded-md my-1" />
        </div>
    );
}

export function CardsSkeleton() {
    return (
        <div className="grid md:grid-cols-2">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </div>
    );
}