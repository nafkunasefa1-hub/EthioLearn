import { SubjectModule } from '../modulesData';
import { BIO_UNITS_1_TO_4 } from './bioUnits1_4';
import { BIO_UNITS_5_TO_8 } from './bioUnits5_8';

export const BIOLOGY_MODULE: SubjectModule = {
  id: 'module-bio',
  subjectCode: 'BIO',
  subjectName: 'Biology',
  iconName: 'Dna',
  colorGradient: 'from-emerald-600 via-green-600 to-teal-800',
  authorNote: 'Oromia Education Bureau • ASTU Special High School Biology Curriculum Module',
  description: 'Comprehensive High School Biology Module (Grade 9-12) covering Cell Biology, Microscopy, Macromolecules, Enzymes, Photosynthesis, Cellular Respiration, Taxonomy, Human Organ Systems, Genetics, Molecular Biotechnology, Ecology, Ethiopian Endemic Biodiversity, and Evolution.',
  units: [
    ...BIO_UNITS_1_TO_4,
    ...BIO_UNITS_5_TO_8
  ]
};
