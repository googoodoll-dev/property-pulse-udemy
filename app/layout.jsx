import "@/assets/styles/globals.css";

export const metadata = {
  title: "Tack Project | Property",
};

function MainLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
export default MainLayout;
