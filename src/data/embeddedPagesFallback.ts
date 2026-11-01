import { BookPage } from '../types';
import { getCivics9PageContent } from '../../scripts/civics9_data/civics_pages_data';
import { getMath12PageContent } from '../../scripts/math12_data/math_pages_data';
import { getPhysics12PageContent } from '../../scripts/physics12_data/physics_pages_data';
import { getBio12PageContent } from '../../scripts/bio12_data/bio_pages_data';
import { getEnglish12PageContent } from '../../scripts/eng12_data/eng_pages_data';
import { getChemistryPageContent } from '../../scripts/chemistry_pages_data';
import { getMath11PageContent } from '../../scripts/math11_data/math_pages_data';

export function getEmbeddedBookPage(bookId: string, pageNumber: number): BookPage | null {
  let content = '';

  if (bookId.includes('12-math')) {
    content = getMath12PageContent(pageNumber);
  } else if (bookId.includes('12-phys')) {
    content = getPhysics12PageContent(pageNumber);
  } else if (bookId.includes('12-chem')) {
    content = getChemistryPageContent(pageNumber);
  } else if (bookId.includes('12-bio')) {
    content = getBio12PageContent(pageNumber);
  } else if (bookId.includes('12-eng')) {
    content = getEnglish12PageContent(pageNumber);
  } else if (bookId.includes('11-math')) {
    content = getMath11PageContent(pageNumber);
  } else if (bookId === 'book-9-civ') {
    content = getCivics9PageContent(pageNumber);
  }

  if (!content) {
    return null;
  }

  return {
    id: `page-embedded-${bookId}-${pageNumber}`,
    book_id: bookId,
    printed_page_number: pageNumber,
    pdf_page_index: pageNumber,
    extracted_text: content,
    final_text: content,
    extraction_method: 'structured_curriculum',
    confidence: 99,
    needs_manual_review: false,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
}
