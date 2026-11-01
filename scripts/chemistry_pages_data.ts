import { getUnit1AndFrontPage } from './chemistry_data_front_unit1';
import { getUnit2PageContent } from './chemistry_data_unit2';
import { getUnit3PageContent } from './chemistry_data_unit3';
import { getUnit4And5PageContent } from './chemistry_data_unit4_5';

export function getChemistryPageContent(pageNum: number): string {
  if (pageNum <= 63) {
    return getUnit1AndFrontPage(pageNum);
  }
  if (pageNum <= 142) {
    return getUnit2PageContent(pageNum);
  }
  if (pageNum <= 220) {
    return getUnit3PageContent(pageNum);
  }
  return getUnit4And5PageContent(pageNum);
}
