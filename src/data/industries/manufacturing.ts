import type { IndustryRecord } from './types'

const record: IndustryRecord = {
  slug: 'manufacturing',
  icon: 'factory',
  techStack: ['C/C++', 'Python', 'MQTT', 'OPC-UA', 'InfluxDB', 'Grafana', 'Azure IoT'],
  relatedCases: ['tdsbot-iot'],
  relatedServices: ['embedded-and-iot', 'ai-services'],
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
    de: {
      title: 'Fertigung & Industrie 4.0',
      tagline: 'Die Werkhalle mit der Cloud verbinden',
      description:
        'Anbindung von IoT-Sensoren, Modernisierung von SCADA/HMI, vorausschauende Wartung und Dashboards zur Produktionsüberwachung für Hersteller in der Schweiz und in Europa.',
      challenges: [
        {
          title: 'OT/IT-Integration',
          description: 'Ältere SPS- und SCADA-Systeme mit moderner Cloud-Infrastruktur verbinden.',
        },
        {
          title: 'Verarbeitung im Sekundentakt',
          description: 'Sensordaten in Sekundenbruchteilen auswerten, für Qualitätskontrolle und Anomalieerkennung.',
        },
        {
          title: 'Raue Einsatzbedingungen',
          description:
            'Industrietaugliche Embedded-Software, die Vibration, Temperatur und elektromagnetischen Störungen standhält.',
        },
      ],
      solutions: [
        {
          title: 'Anbindung von IoT-Sensoren',
          description: 'MQTT/OPC-UA-Konnektoren für SPS, Sensoren und Edge-Geräte.',
        },
        {
          title: 'Vorausschauende Wartung',
          description: 'ML-Modelle, die Maschinenausfälle erkennen, bevor sie eintreten.',
        },
        {
          title: 'MES/SCADA modernisieren',
          description: 'Webbasierte HMI mit Echtzeit-Dashboards ersetzt veraltete SCADA-Oberflächen.',
        },
        {
          title: 'KI in der Qualitätskontrolle',
          description: 'Computer Vision zur Fehlererkennung an Produktionslinien.',
        },
      ],
      meta: {
        title: 'Software für Fertigung & Industrie 4.0 | Trident Software',
        description:
          'Industrie-4.0-Software: IoT-Integration, vorausschauende Wartung, SCADA-Modernisierung, KI in der Qualitätskontrolle. Engineering aus der Schweiz.',
      },
    },
    fr: {
      title: 'Industrie & Industrie 4.0',
      tagline: "Relier l'atelier au cloud",
      description:
        'Intégration de capteurs IoT, modernisation SCADA/IHM, maintenance prédictive et tableaux de bord de suivi de production pour les industriels suisses et européens.',
      challenges: [
        {
          title: 'Convergence OT/IT',
          description: 'Relier les automates et systèmes SCADA existants à une infrastructure cloud moderne.',
        },
        {
          title: 'Traitement en temps réel',
          description:
            "Analyse des données capteurs en moins d'une seconde pour le contrôle qualité et la détection d'anomalies.",
        },
        {
          title: 'Environnements difficiles',
          description:
            'Logiciel embarqué de qualité industrielle, résistant aux vibrations, à la température et aux perturbations électromagnétiques.',
        },
      ],
      solutions: [
        {
          title: 'Intégration de capteurs IoT',
          description: 'Connecteurs MQTT/OPC-UA pour automates, capteurs et équipements edge.',
        },
        {
          title: 'Maintenance prédictive',
          description: "Modèles de ML qui détectent les pannes d'équipement avant qu'elles ne surviennent.",
        },
        {
          title: 'Modernisation MES/SCADA',
          description: 'IHM web avec tableaux de bord en temps réel à la place des anciens SCADA.',
        },
        {
          title: 'IA pour le contrôle qualité',
          description: 'Vision par ordinateur pour détecter les défauts sur les lignes de production.',
        },
      ],
      meta: {
        title: 'Logiciels industrie & Industrie 4.0 | Trident Software',
        description:
          'Logiciels Industrie 4.0 : intégration IoT, maintenance prédictive, modernisation SCADA, contrôle qualité par IA. Ingénierie suisse.',
      },
    },
    it: {
      title: 'Manifattura & Industria 4.0',
      tagline: 'Collegare il reparto produttivo al cloud',
      description:
        'Integrazione di sensori IoT, modernizzazione SCADA/HMI, manutenzione predittiva e dashboard di monitoraggio della produzione per aziende manifatturiere svizzere ed europee.',
      challenges: [
        {
          title: 'Integrazione OT/IT',
          description: "Collegare PLC e sistemi SCADA esistenti a un'infrastruttura cloud moderna.",
        },
        {
          title: 'Elaborazione in tempo reale',
          description:
            'Dati dei sensori elaborati in meno di un secondo per controllo qualità e rilevamento delle anomalie.',
        },
        {
          title: 'Ambienti ostili',
          description:
            'Software embedded di livello industriale che resiste a vibrazioni, temperature e interferenze elettromagnetiche.',
        },
      ],
      solutions: [
        {
          title: 'Integrazione di sensori IoT',
          description: 'Connettori MQTT/OPC-UA per PLC, sensori e dispositivi edge.',
        },
        {
          title: 'Manutenzione predittiva',
          description: 'Modelli di ML che individuano i guasti alle macchine prima che si verifichino.',
        },
        {
          title: 'Modernizzazione MES/SCADA',
          description: 'HMI web con dashboard in tempo reale al posto dei vecchi SCADA.',
        },
        {
          title: 'IA per il controllo qualità',
          description: 'Computer vision per individuare i difetti sulle linee di produzione.',
        },
      ],
      meta: {
        title: 'Software per manifattura & Industria 4.0 | Trident Software',
        description:
          'Software Industria 4.0: integrazione IoT, manutenzione predittiva, modernizzazione SCADA, controllo qualità con IA. Ingegneria svizzera.',
      },
    },
  },
}

export default record
