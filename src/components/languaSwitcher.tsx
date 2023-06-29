import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      {/* Adicione mais opções de idioma aqui */}
    </select>
  );
}