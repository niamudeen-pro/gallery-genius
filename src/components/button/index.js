export const MovingBorderButton = ({ children = 'button title' }) => {
    return (
        <button className="relative inline-flex  rounded-lg overflow-hidden  p-[1px] hover:outline-none hover:ring-1 hover:ring-slate-400 hover:ring-offset-1 hover:ring-offset-slate-50 bg-black">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-black py-4 px-10 rounded-lg text-sm font-medium text-white backdrop-blur-3xl">
                {children}
            </span>
        </button>
    );
};
