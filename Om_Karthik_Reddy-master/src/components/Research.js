// src/components/Research.js
import React, { useState } from 'react';
import { ExternalLink, Github, Star, Calendar, Users, BookOpen } from 'lucide-react';
import rscd from '../data/rscd_image.jpg';
import quantization from '../data/quantization.png';
import ResearchDetail from './ResearchDetail';


const Research = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [selectedProjectId, setSelectedProjectId] = useState(null);
    // ../data
    const data = {};
    const req1 = require.context('../data', false, /\.(png|jpe?g|svg)$/);
    req1.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        data[fileName] = req1(key);
    });

    // ../data/KETI
    const keti_data = {};
    const req2 = require.context('../data/KETI', false, /\.(png|jpe?g|svg)$/);
    req2.keys().forEach((key) => {
        const fileName = key.replace('./', '');
        keti_data[fileName] = req2(key);
    });
    /*
    const projects = [


        {

            id: "CB_DistillGrad",
            title: "Model–Accelerator Co-Design for Real-Time Road Surface Condition Estimation Using Camera and LiDAR Fusion",
            category: "edge-ai",
            status: "in-progress",
            description: "Developing lightweight AI models for road surface condition estimation using camera and LiDAR fusion, optimized through KD, pruning, quantization, and NAS for efficient FPGA deployment.",
            technologies: ["PyTorch","CUDA", "ONNX", "ARM Cortex", "HLS", "Vitis AI"],
            // paper: "https://arxiv.org/example",
            code: "https://github.com/vemuri02/CB_Distillation",
            // demo: "https://your-demo-site.com",
            image: data['rscd_image.jpg'],
            metrics: {
                accuracy: "87.11%",
                parameters: "0.13M",
                inference: "1.05ms"
            },
            collaborators: ["Achyuth Gundrapally", "Dr. Zhengyu Xia", "Dr. Kyuwon Choi","Dr. Joohee Kim"],
            venue: "IEEE Access, 2025"
        },
        {
            id: "lowPowerAI",
            title: "Low-Power FPGA Accelerators for Edge AI",
            category: "optimization",
            status: "published",
            description: "FPGA-based designs achieving 30–69× energy efficiency over GPUs for real-time AI inference.",
            technologies: ["PyTorch", "CUDA", "TensorRT","FPGA (Xilinx ZCU104)", "Titan GPU", "Jetson Orin", "Vivado", "Tensil Toolchain", "COCO Dataset"],
            paper: null,
            code: "https://github.com/yourusername/qat-research",
            demo: null,
            image: keti_data['keti_overview.png'],
            // metrics: {
            //     compression: "75%",
            //     accuracy_drop: "<2%",
            //     speedup: "3.2x"
            // },
            metrics: {
                "FPGA vs GPU Power": "69× more efficient",
                "Dynamic Power Reduction": "36%",
                "Inference Latency": "Real-time object detection achieved",
                "SRAM CIM Design": "~70% power reduction",
                "Overall Efficiency": "30× vs GPU baseline"
            },
            collaborators: ["Achyuth Gundrapally","Yatrik Shah", "Dr. Kyuwon Choi"],
            venue: "MDPI Electronics & IEEE (2023-2025)"
        },

    ];
    */

    const publications = [
        {
            title: 'Integrating Green Lean Six Sigma and Industry 4.0 for Sustainable Supply Chains',
            authors: 'Om Karthik Reddy Valipireddy',
            venue: "In submission process",
            type: "Review Paper",
            link: "/Om_Karthik_Review_Paper_Draft.pdf",
            description: "This systematic literature review investigates the integration of Green Lean Six Sigma (GLSS) with Industry 4.0 (I4.0) to enhance sustainable supply chain management (SSCM). Using the PRISMA protocol, this review maps the academic landscape on synergies between GLSS and key I4.0 enablers. Our analysis reveals that emerging 'LSS 4.0' frameworks are predominantly manufacturing-centric. The primary contribution of this paper is to address this limitation by integrating findings from the literature into a conceptual model for the entire supply chain."
        }
    ];

    if (selectedProjectId) {
        return (
            <ResearchDetail
                projectId={selectedProjectId}

                onBack={() => setSelectedProjectId(null)}
            />
        );
    }

    return (
        <section className="research-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Research Portfolio</h2>
                    <p className="section-subtitle">
                        Exploring the intersection of deep learning and edge computing
                    </p>
                </div>

                {/* Publications Section */}
                <div className="publications-section">
                    <h3 className="subsection-title">Recent Publications</h3>
                    <div className="publications-list">
                        {publications.map((pub, index) => (
                            <div key={index} className="publication-item">
                                <div className="publication-content">
                                    <h4 className="publication-title">{pub.title}</h4>
                                    <p className="publication-authors">{pub.authors}</p>
                                    <p className="publication-venue">{pub.venue}</p>
                                    <p>{pub.description}</p>
                                    <div className="publication-meta">
                                        <span className="publication-type">{pub.type}</span>
                                        {/* <div className="citation-count">
                                            <Star size={14} />
                                            <span>{pub.citations} citations</span>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="publication-actions">
                                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="link-btn">
                                        <ExternalLink size={10} />
                                        View Paper
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;