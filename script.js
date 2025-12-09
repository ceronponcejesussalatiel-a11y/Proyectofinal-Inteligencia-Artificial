// Función para cambiar entre frames
function showFrame(frameId) {
    const frames = document.querySelectorAll('.frame');
    const buttons = document.querySelectorAll('.nav-btn');
    
    frames.forEach(frame => frame.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    
    document.getElementById(frameId).classList.add('active');
    event.target.classList.add('active');
}

// Manejo de error de imagen del logo
const logoImg = document.getElementById('logoImg');
logoImg.onerror = function() {
    this.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.style.cssText = `
        width: 250px;
        height: 250px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0 auto;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    `;
    placeholder.textContent = 'CBTIS 222';
    this.parentElement.appendChild(placeholder);
};

// Gráfica de Salarios
const salaryCtx = document.getElementById('salaryChart');
if (salaryCtx) {
    new Chart(salaryCtx, {
        type: 'bar',
        data: {
            labels: ['Junior', 'Mid-Level', 'Senior', 'Lead', 'Expert'],
            datasets: [{
                label: 'Salario Anual en México (MXN en miles)',
                data: [630, 1170, 1710, 2340, 3240],
                backgroundColor: [
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(118, 75, 162, 0.8)',
                    'rgba(102, 126, 234, 0.9)',
                    'rgba(118, 75, 162, 0.9)',
                    'rgba(102, 126, 234, 1)'
                ],
                borderColor: [
                    'rgba(102, 126, 234, 1)',
                    'rgba(118, 75, 162, 1)',
                    'rgba(102, 126, 234, 1)',
                    'rgba(118, 75, 162, 1)',
                    'rgba(102, 126, 234, 1)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Salarios en IA por Nivel de Experiencia (México)',
                    font: { size: 16 }
                }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Gráfica de Demanda Laboral
const demandCtx = document.getElementById('demandChart');
if (demandCtx) {
    new Chart(demandCtx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            datasets: [{
                label: 'Ofertas de Empleo en IA México (cantidad)',
                data: [85, 125, 180, 260, 390, 520, 720],
                borderColor: 'rgba(118, 75, 162, 1)',
                backgroundColor: 'rgba(118, 75, 162, 0.2)',
                tension: 0.4,
                fill: true,
                borderWidth: 3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Crecimiento de Demanda Laboral en IA',
                    font: { size: 16 }
                }
            }
        }
    });
}

// Gráfica de Adopción por Sector
const growthCtx = document.getElementById('growthChart');
if (growthCtx) {
    new Chart(growthCtx, {
        type: 'doughnut',
        data: {
            labels: ['Finanzas', 'Tecnología', 'Salud', 'Retail', 'Manufactura', 'Otros'],
            datasets: [{
                data: [24, 28, 16, 13, 11, 8],
                backgroundColor: [
                    'rgba(102, 126, 234, 0.8)',
                    'rgba(118, 75, 162, 0.8)',
                    'rgba(102, 126, 234, 0.6)',
                    'rgba(118, 75, 162, 0.6)',
                    'rgba(102, 126, 234, 1)',
                    'rgba(118, 75, 162, 0.4)'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Sectores con Mayor Demanda de IA en México (%)',
                    font: { size: 16 }
                }
            }
        }
    });
}

// Gráfica de Distribución Regional
const industryCtx = document.getElementById('industryChart');
if (industryCtx) {
    new Chart(industryCtx, {
        type: 'radar',
        data: {
            labels: ['Programación', 'Matemáticas', 'Estadística', 'Machine Learning', 'Deep Learning', 'Big Data'],
            datasets: [{
                label: 'Nivel de Dominio Esperado',
                data: [90, 85, 88, 92, 87, 85],
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Distribución de Competencias en IA',
                    font: { size: 16 }
                }
            }
        }
    });
}

// Gráfica Regional de Oportunidades
const regionalCtx = document.getElementById('regionalChart');
if (regionalCtx) {
    new Chart(regionalCtx, {
        type: 'bar',
        data: {
            labels: ['Ciudad de México', 'Querétaro', 'Puebla', 'Toluca', 'Pachuca'],
            datasets: [{
                label: 'Vacantes en Tecnología e IA',
                data: [1850, 420, 280, 190, 125],
                backgroundColor: 'rgba(102, 126, 234, 0.8)',
                borderColor: 'rgba(102, 126, 234, 1)',
                borderWidth: 2
            },
            {
                label: 'Salario Promedio (MXN miles/mes)',
                data: [45, 42, 38, 40, 35],
                backgroundColor: 'rgba(118, 75, 162, 0.8)',
                borderColor: 'rgba(118, 75, 162, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Oportunidades Laborales en la Región Central',
                    font: { size: 16 }
                }
            },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

// Gráfica de Habilidades Técnicas
const skillsCtx = document.getElementById('skillsChart');
if (skillsCtx) {
    new Chart(skillsCtx, {
        type: 'horizontalBar',
        data: {
            labels: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Cloud Computing', 'Git'],
            datasets: [{
                label: 'Importancia en el Mercado (%)',
                data: [95, 88, 85, 82, 90, 87],
                backgroundColor: 'rgba(118, 75, 162, 0.8)',
                borderColor: 'rgba(118, 75, 162, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: {
                title: {
                    display: true,
                    text: 'Tecnologías Más Demandadas',
                    font: { size: 16 }
                }
            },
            scales: {
                x: { beginAtZero: true, max: 100 }
            }
        }
    });
}

// Gráfica de Trayectoria Profesional
const careerCtx = document.getElementById('careerChart');
if (careerCtx) {
    new Chart(careerCtx, {
        type: 'line',
        data: {
            labels: ['Año 1', 'Año 2', 'Año 3', 'Año 5', 'Año 7', 'Año 10'],
            datasets: [
                {
                    label: 'Salario Proyectado (MXN miles/mes)',
                    data: [25, 35, 48, 65, 85, 110],
                    borderColor: 'rgba(102, 126, 234, 1)',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3
                },
                {
                    label: 'Experiencia y Habilidades (%)',
                    data: [40, 55, 68, 80, 88, 95],
                    borderColor: 'rgba(118, 75, 162, 1)',
                    backgroundColor: 'rgba(118, 75, 162, 0.1)',
                    tension: 0.4,
                    fill: true,
                    borderWidth: 3
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Proyección de Carrera: Salario y Crecimiento Profesional',
                    font: { size: 16 }
                }
            }
        }
    });
}
