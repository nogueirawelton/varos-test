import { SelectionWallet } from "@/components/Global/Icons/SelectionWallet";
import { FactorWallet } from "@/components/Global/Icons/FactorWallet";
import { DividendWallet } from "@/components/Global/Icons/DividendWallet";
import { EssentialWallet } from "@/components/Global/Icons/EssentialWallet";
import { SmallCapsWallet } from "@/components/Global/Icons/SmallCapsWallet";
import { FiiWallet } from "@/components/Global/Icons/FiiWallet";

import { Valuation } from "@/components/Global/Icons/Valuation";
import { PyCode } from "@/components/Global/Icons/PyCode";
import { PyDash } from "@/components/Global/Icons/PyDash";
import { Reels } from "@/components/Global/Icons/Reels";
import { FiiEncyclopedia } from "@/components/Global/Icons/FiiEncyclopedia";

export const wallets = [
  {
    value: "carteira-selecao",
    label: "Carteira Seleção",
    Icon: SelectionWallet,
  },
  {
    value: "carteira-fator",
    label: "Carteira FATOR",
    Icon: FactorWallet,
  },
  {
    value: "carteira-dividendos",
    label: "Carteira Dividendos",
    Icon: DividendWallet,
  },
  {
    value: "carteira-essencial",
    label: "Carteira Essencial",
    Icon: EssentialWallet,
  },
  {
    value: "carteira-fii",
    label: "Carteira FIIs",
    Icon: FiiWallet,
  },
  {
    value: "cateira-smallcaps",
    label: "Carteira Small Caps",
    Icon: SmallCapsWallet,
  },
];

export const courses = [
  {
    value: "valuation",
    label: "Valuation 2.0",
    Icon: Valuation,
  },
  {
    value: "codigo.py",
    label: "Código.py",
    Icon: PyCode,
  },
  {
    value: "dash.py",
    label: "Dash.py",
    Icon: PyDash,
  },
  {
    value: "carteira-essencial",
    label: "Carteira Essencial",
    Icon: EssentialWallet,
  },
  {
    value: "curso-reels",
    label: "Curso Reels",
    Icon: Reels,
  },
  {
    value: "enciclopedia-fii",
    label: "Enciclopédia de FII",
    Icon: FiiEncyclopedia,
  },
];

export const consultancy = [
  {
    value: "consultoria",
    label: "Consultoria VAROS",
    Icon: Valuation,
  },
];
