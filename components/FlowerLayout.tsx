export default function FlowerLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                background: "linear-gradient(135deg, #ffe4ec, #ffd6e0, #ffc1d6)",
                minHeight: "100vh",
                padding: "40px"
            }}
        >
            <div
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto"
                }}
            >
                {children}
            </div>
        </div>
    )
}