import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'manufacturing',
  icon: 'factory',
  techStack: ['C/C++', 'Python', 'MQTT', 'OPC-UA', 'InfluxDB', 'Grafana', 'Azure IoT'],
  relatedCases: ['tdsbot-iot'],
  relatedServices: ['embedded-and-iot', 'ai-services', 'cloud-consulting'],
  content: {
    en: {
      title: 'Manufacturing & Industry 4.0',
      tagline: 'Connecting the factory floor to the cloud',
      description:
        'IoT sensor integration, SCADA/HMI modernization, predictive maintenance systems, and production monitoring dashboards for Swiss and European manufacturers.',
      challenges: [
        {
          title: 'OT/IT integration',
          description: 'Bridging legacy PLC/SCADA systems with modern cloud infrastructure.',
        },
        {
          title: 'Real-time processing',
          description: 'Sub-second sensor data processing for quality control and anomaly detection.',
        },
        {
          title: 'Harsh environments',
          description: 'Industrial-grade embedded software for vibration, temperature, and EMI conditions.',
        },
      ],
      solutions: [
        {
          title: 'IoT sensor integration',
          description: 'MQTT/OPC-UA connectors for PLCs, sensors, and edge devices.',
        },
        {
          title: 'Predictive maintenance',
          description: 'ML models detecting equipment failure before it happens.',
        },
        {
          title: 'MES/SCADA modernization',
          description: 'Web-based HMI replacing legacy SCADA with real-time dashboards.',
        },
        {
          title: 'Quality control AI',
          description: 'Computer vision for defect detection on production lines.',
        },
      ],
      meta: {
        title: 'Manufacturing & Industry 4.0 Software | Trident Software',
        description:
          'Industry 4.0 software — IoT integration, predictive maintenance, SCADA modernization, quality control AI. Swiss engineering.',
      },
    },
  },
}

export default record
