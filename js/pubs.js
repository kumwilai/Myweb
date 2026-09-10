// Journal publications, newest first. Kept as data so every page can reuse it.
//
// The c field is the citation count from the Google Scholar profile, read on
// 10 September 2026. It is present only for the papers the profile lists in its
// top results. A paper with no c field has fewer citations than the lowest of
// those, and is deliberately left blank rather than written as zero.
const PUBS = [
 {n:31,y:2026,t:"AHA-JEPA, articulated hand-aware JEPA for leak-free gloss conditioned sign pose generation",a:"W. Kumwilaisak",v:"IEEE Access, vol. 14, pp. 128559-128580",doi:"10.1109/ACCESS.2026.3716809",k:["vision","learning"]},
 {n:30,y:2026,t:"Attention-driven alaryngeal speech enhancement via discrete representation learning and timbre-preserving augmentation",a:"H. Y. Lwin, W. Kumwilaisak, C. Hansakunbuntheung, N. Thatphithakkul",v:"IEEE Open Journal of the Computer Society, vol. 7, pp. 1236-1247",k:["speech","learning"]},
 {n:29,y:2026,t:"CrackNet-GNN, unsupervised crack detection in concrete structures via depth-based segmentation and graph neural networks",a:"H. T. Aung, W. Kumwilaisak, S. Maneemool, N. Suthonadisonwong, K. Saeton",v:"IEEE Transactions on Industrial Informatics, vol. 22, no. 6, pp. 4980-4991",doi:"10.1109/TII.2026.3666722",k:["vision","learning"]},
 {n:28,y:2026,t:"Intelligent EMS dispatch via adaptive learning with counterfactual and risk-aware optimization",a:"W. Kumwilaisak",v:"IEEE Access, vol. 14, pp. 31804-31823",k:["learning"]},
 {n:27,y:2026,t:"Spatial-temporal transformers with stochastic time-warping and joint-wise encoding for rehabilitation exercise assessment",a:"T. Matangkasombut, W. Kumwilaisak, C. Hansakunbuntheung, N. Thatphithakkul",v:"IEEE Open Journal of the Computer Society, vol. 7, pp. 190-201",k:["vision","learning"]},
 {n:26,y:2025,t:"Robust ICU mortality prediction with multi-task diffusion and contrastive learning frameworks",a:"N. Buranaburustam, W. Kumwilaisak, C. Hansakunbuntheung, N. Thatphithakkul, K. Kumwilaisak",v:"APSIPA Transactions on Signal and Information Processing, vol. 14, no. 1",k:["learning"]},
 {n:25,y:2024,c:17,t:"American sign language fingerspelling recognition in the wild with spatio temporal feature extraction and multi-task learning",a:"P. Pannattee, W. Kumwilaisak, C. Hansakunbuntheun, N. Thatphithakkul, C.-C. Jay Kuo",v:"Expert Systems with Applications, vol. 243",k:["vision","learning"]},
 {n:24,y:2023,t:"Novel personal protective equipment detection technique with attention-based YOLOv7 and human pose estimation",a:"K. O. Monnikhof, P. Areerob, W. Zheng, T. Tanasnitikul, W. Kumwilaisak",v:"APSIPA Transactions on Signal and Information Processing, vol. 12, no. 1",k:["vision"]},
 {n:23,y:2022,t:"American sign language fingerspelling recognition in the wild with iterative language model construction",a:"W. Kumwilaisak, P. Pannattee, C. Hansakunbuntheun, N. Thatphithakkul",v:"APSIPA Transactions on Signal and Information Processing, vol. 11, no. 1",k:["vision","learning"]},
 {n:22,y:2022,c:19,t:"Semi-supervised learning for defect segmentation with autoencoder auxiliary module",a:"B. Sae-Ang, W. Kumwilaisak, P. Kaewtrakulpong",v:"Sensors, vol. 22, no. 8, p. 2915",k:["vision","learning"]},
 {n:21,y:2022,c:27,t:"Adaptive call center workforce management with deep neural network and reinforcement learning",a:"W. Kumwilaisak, S. Phikulngoen, J. Piriyataravet, N. Thatphithakkul, C. Hansakunbuntheun",v:"IEEE Access, vol. 10, pp. 35712-35724",k:["learning"]},
 {n:20,y:2021,t:"Determining bus stop locations using deep learning and time filtering",a:"J. Piriyataravet, W. Kumwilaisak, J. Chinrungrueng, T. Piriyataravet",v:"Engineering Journal, vol. 25, no. 8, pp. 1-12",k:["learning"]},
 {n:19,y:2020,c:40,t:"Image denoising with deep convolutional neural and multi-directional long short-term memory networks under Poisson noise environments",a:"W. Kumwilaisak, T. Piriyatharawet, P. Lasang, N. Thatphithakkul",v:"IEEE Access, vol. 8, pp. 86998-87010",k:["vision","learning"]},
 {n:18,y:2019,c:17,t:"Adaptive probabilistic caching technique for caching networks with dynamic content popularity",a:"S. Tarnoi, W. Kumwilaisak, V. Suppakitpaisarn, K. Fukuda, Y. Ji",v:"Computer Communications, vol. 139, no. 1, pp. 1-15",k:["networks"]},
 {n:17,y:2017,t:"Adaptive prioritized probabilistic caching algorithm for content centric networks",a:"W. Sirichitedumrong, W. Kumwilaisak, S. Tarnoi, N. Thatphitthukkul",v:"Engineering Journal, vol. 21, no. 6, pp. 1-12",k:["networks"]},
 {n:16,y:2017,t:"Dynamic probabilistic caching algorithm with content priorities for content centric networks",a:"W. Sirichitedumrong, W. Kumwilaisak, S. Tarnoi, N. Thatphitthukkul",v:"ETRI Journal, vol. 39, no. 5, pp. 695-706",k:["networks"]},
 {n:15,y:2016,t:"Optimal depth recovery using image guided TGV with depth confidence for high-quality view synthesis",a:"P. Lasang, W. Kumwilaisak, Yazhou Liu, S. M. Shen",v:"Journal of Visual Communication and Image Representation, vol. 39, pp. 24-39",k:["vision"]},
 {n:14,y:2014,t:"Optimal cooperative routing protocol for efficient in-network cache management in content centric networks",a:"S. Tarnoi, W. Kumwilaisak, Y. Ji",v:"IEICE Transactions on Communications, vol. E-97-B, no. 12, pp. 2627-2640",k:["networks"]},
 {n:13,y:2014,t:"QoS-aware routing heterogeneous wireless unicasts with cooperative network coding",a:"S. Tarnoi, W. Kumwilaisak, P. Saengudomlert, Y. Ji, C.-C. Jay Kuo",v:"EURASIP Journal on Wireless Communications and Networking, 2014:81",k:["networks"]},
 {n:12,y:2013,t:"Detection and localization of link quality degradation in transparent WDM networks",a:"W. Yuttachai, P. Saengudomlert, W. Kumwilaisak",v:"IEICE Transactions on Communications, vol. E-96-B, no. 6, pp. 1412-1424",k:["networks"]},
 {n:11,y:2013,t:"QoS assured multi-rate H.264 scalable video multicast with network coding in lossy networks",a:"W. Kumwilaisak, S. Tarnoi",v:"ECTI Transactions on Computer and Information Technology, vol. 7, no. 1, pp. 14-19",k:["media","networks"]},
 {n:10,y:2013,t:"Robust scalable video multicast with multiple sources and inter-source network decoding in lossy networks",a:"S. Tarnoi, W. Kumwilaisak, Yusheng Ji, C.-C. Jay Kuo",v:"Journal of Visual Communication and Image Representation, vol. 24, no. 5, pp. 602-614",k:["media","networks"]},
 {n:9,y:2012,t:"Non-uniform illumination estimation in fundus images using bounded surface fitting",a:"W. Sae-Tang, S. Kiattisin, W. Chiracharit, W. Kumwilaisak",v:"International Journal of Applied Biomedical Engineering, vol. 5, no. 1, pp. 37-45",k:["vision"]},
 {n:8,y:2012,t:"On the decodability of random linear network coding in acyclic networks",a:"S. Tarnoi, W. Kumwilaisak, P. Saengudomlert",v:"IEICE Transactions on Communications, vol. E95-B, no. 10, pp. 3120-3129",k:["networks"]},
 {n:7,y:2011,t:"Multi-rate multicast using network coding in lossy networks",a:"W. Sae-Tang, P. Tipkumarn, W. Kumwilaisak",v:"IEICE Electronics Express, vol. 8, no. 5, pp. 273-278",k:["networks"]},
 {n:6,y:2011,c:40,t:"Spatial error concealment with sequence aligned texture modeling and adaptive directional recovery",a:"W. Kumwilaisak, C.-C. Jay Kuo",v:"Journal of Visual Communication and Image Representation, vol. 22, no. 2, pp. 164-177",k:["media","vision"]},
 {n:5,y:2010,t:"A framework for reliability aware layered multicast in lossy networks with network coding",a:"S. Supittayapornpong, P. Saengudomlert, W. Kumwilaisak",v:"Computer Communications, vol. 33, no. 14, pp. 1651-1663",k:["networks"]},
 {n:4,y:2009,t:"Rate distortion analysis and bit allocation scheme for wavelet lifting-based multi-view image coding",a:"P. Lasang, W. Kumwilaisak",v:"EURASIP Journal on Advances in Signal Processing, vol. 2009, art. 394065",k:["media"]},
 {n:3,y:2009,t:"Rate-complexity scalable multi-view image coding with adaptive disparity-compensated wavelet lifting",a:"P. Lasang, C.-S. Kim, W. Kumwilaisak",v:"Journal of Information and Computing Science, vol. 4, no. 3, pp. 211-223",k:["media"]},
 {n:2,y:2008,c:21,t:"Fading channel modeling via variable length Markov chain technique",a:"W. Kumwilaisak, C.-C. Jay Kuo, D. Wu",v:"IEEE Transactions on Vehicular Technology, vol. 57, no. 3, pp. 1338-1358",k:["networks"]},
 {n:1,y:2003,c:155,t:"A cross-layer quality-of-service mapping architecture for video delivery in wireless networks",a:"W. Kumwilaisak, Y. T. Hou, Q. Zhang, W. Zhu, C.-C. Jay Kuo, Ya-Qin Zhang",v:"IEEE Journal on Selected Areas in Communications, vol. 21, no. 10, pp. 1685-1698",k:["media","networks"],award:"Best Paper Award"}
];

const PATENTS = [
 {t:"Method and apparatus for automatic visual artifact analysis and artifact reduction",a:"G. Dane, W. Kumwilaisak, C. Gomila",v:"United States Patent 9,602,838 B2",y:2017},
 {t:"Banding artifact detection in digital video content",a:"W. Kumwilaisak, G. Dane, C. Gomila",v:"United States Patent 8,532,198",y:2013}
];

const AREAS = {media:"Multimedia coding", networks:"Networking", vision:"Vision and imaging", speech:"Speech", learning:"Machine learning"};
