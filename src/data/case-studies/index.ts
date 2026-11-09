import type { CaseRecord } from '../cases'
import postAcuteClinicNetwork from './post-acute-clinic-network'
import clinicVoiceDocumentation from './clinic-voice-documentation'
import fiduciaryMailAndReceipts from './fiduciary-mail-and-receipts'
import warrantyControlComponentMaker from './warranty-control-component-maker'
import buildingMaterialsOrderToLoad from './building-materials-order-to-load'
import lettingAgencyEnquiryToViewing from './letting-agency-enquiry-to-viewing'

/**
 * The six case studies written up from the source-of-truth PDF, in the homepage order.
 * Facts and figures are the PDF's; the de/fr/it text is a translation of the English.
 */
export const PDF_CASES: CaseRecord[] = [
  postAcuteClinicNetwork,
  clinicVoiceDocumentation,
  warrantyControlComponentMaker,
  fiduciaryMailAndReceipts,
  buildingMaterialsOrderToLoad,
  lettingAgencyEnquiryToViewing,
]
