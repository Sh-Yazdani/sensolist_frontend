import initTranslations from "@/app/i18n";
import Header from "@/components/Header";
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
      <div className="flex flex-col h-[100vh] dark:bg-dark-background-color">
        <Header />
        {children}
      </div>
    </TranslationsProvider>
  );
}
