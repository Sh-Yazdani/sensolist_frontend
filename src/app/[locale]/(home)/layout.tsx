import initTranslations from "@/app/i18n";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ["default"];

export default async function AuthLayout({
  children,
  params: { locale }, // will be a page or nested layout
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18nNamespaces}
    >
      <div className="flex flex-col h-[100vh] dark:bg-dark-background-color ">
        <Header />
        <div className=" relative h-full lg:mb-4 ">
          <Menu />
          <div className=" h-full lg:ml-[212px] text-primary-Shade-1">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
