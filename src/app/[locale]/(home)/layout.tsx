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
      <div className="flex flex-col dark:bg-dark-background-color min-h-[100vh]">
        <Header />
        <div className=" relative h-full lg:mb-4 flex-1 min-h-[700px]">
          <Menu />
          <div className=" h-full lg:ml-[212px] text-primary-Shade-1 pb-[62px] lg:pb-0 md:ml-[136px]">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </TranslationsProvider>
  );
}
