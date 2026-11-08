import type { LocationRecord } from './types'

const record: LocationRecord = {
  slug: 'winterthur',
  relatedServices: ['embedded-and-iot', 'software-engineering', 'ai-services', 'devops-and-sre'],
  relatedCases: ['tdsbot-iot', '8move-driver', 'zenit-auto-b2b'],
  content: {
    en: {
      name: 'Winterthur',
      region: 'Canton of Zurich',
      tagline: "Industrial software and engineering tools for Winterthur's manufacturers",
      description:
        "Winterthur hosts Sulzer, Rieter, ZHAW, and one of Switzerland's strongest engineering and manufacturing clusters. We build industrial IoT monitoring systems, predictive maintenance platforms, and production floor software for Winterthur's machinery and manufacturing companies.",
      keyIndustries: [
        'Manufacturing & Engineering',
        'Insurance & Finance',
        'Education (ZHAW)',
        'Energy & Utilities',
        'Healthcare',
      ],
      highlights: [
        {
          title: 'Industrial IoT & monitoring',
          description:
            "Sensor data ingestion, time-series dashboards, and anomaly detection for Winterthur's production machinery and industrial equipment.",
        },
        {
          title: 'Predictive maintenance software',
          description:
            'ML-based failure prediction, maintenance scheduling, and asset lifecycle management for machine-heavy manufacturers.',
        },
        {
          title: 'Engineering workflow tools',
          description:
            "Custom ERP extensions, project management integrations, and technical documentation platforms for Winterthur's engineering firms.",
        },
      ],
      meta: {
        title: 'Industrial Software Winterthur | IoT & Manufacturing Tech | Trident Software',
        description:
          'Industrial IoT, predictive maintenance, and manufacturing software for Winterthur. Sensor integration, ML-based anomaly detection. Swiss engineering team.',
      },
    },
  },
}

export default record
