let confirmed = {};

function openEvent(id) {
    document.getElementById("event-list").style.display = "none";

    const page = document.getElementById("page" + id);
    page.innerHTML = getEventPage(id);
    page.style.display = "block";
}

function confirmEvent(id) {
    confirmed[id] = true;

    const buttons = document.querySelectorAll(".event-card button");
    buttons[id - 1].textContent = "Confirmado";
    buttons[id - 1].classList.add("confirmed");

    backToList();
}

function backToList() {
    document.getElementById("event-list").style.display = "grid";
    document.querySelectorAll(".event-page").forEach(p => p.style.display = "none");
}

function getEventPage(id) {
    const events = {
        1: {
            title: "Hackathon Global TechDEVerse",
            img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
            desc: `
                Participe de um dos maiores hackathons do mundo, reunindo desenvolvedores,
                designers, engenheiros e visionários para criar soluções de alto impacto.
                Durante 48 horas, equipes competem utilizando tecnologias modernas,
                metodologias ágeis e ferramentas avançadas de prototipagem.
            `,
            schedule: [
                ["18h00", "Abertura oficial"],
                ["19h00", "Início da maratona"],
                ["Dia seguinte", "Mentorias especializadas"],
                ["48h", "Pitch final e premiação"]
            ]
        },

        2: {
            title: "Workshop React Avançado",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
            desc: `
                Um workshop completo para quem deseja dominar conceitos modernos do React,
                incluindo Server Components, Suspense, otimizações de renderização e padrões
                arquiteturais para aplicações escaláveis.
            `,
            schedule: [
                ["14h00", "Abertura"],
                ["15h00", "Server Components"],
                ["16h30", "Suspense e streaming"],
                ["18h00", "Hands-on"]
            ]
        },

        3: {
            title: "IA e o Futuro do Desenvolvimento",
            img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
            desc: `
                Uma imersão profunda na revolução da Inteligência Artificial aplicada ao
                desenvolvimento de software. Explore automações inteligentes,
                copilots avançados e tendências que moldarão os próximos 10 anos.
            `,
            schedule: [
                ["19h30", "Keynote de abertura"],
                ["20h00", "Automação inteligente"],
                ["21h00", "Painel sobre IA generativa"],
                ["22h00", "Encerramento"]
            ]
        },

        4: {
            title: "Tech Leadership Summit",
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
            desc: `
                Encontro exclusivo para líderes de tecnologia sobre gestão moderna,
                cultura de engenharia, comunicação estratégica e tomada de decisões.
            `,
            schedule: [
                ["09h00", "Boas-vindas"],
                ["10h00", "Painel liderança ágil"],
                ["14h00", "Gestão de times remotos"],
                ["17h00", "Networking"]
            ]
        },

        5: {
            title: "Masterclass CI/CD Moderno",
            img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800",
            desc: `
                Aprenda na prática pipelines robustos utilizando GitHub Actions, GitLab CI,
                ambientes automatizados e estratégias avançadas de deploy.
            `,
            schedule: [
                ["13h00", "Introdução ao CI/CD"],
                ["14h00", "Pipelines inteligentes"],
                ["16h00", "Deploy automatizado"],
                ["18h00", "Casos reais"]
            ]
        },

        6: {
            title: "Imersão em Design Digital",
            img: "https://images.unsplash.com/photo-1555949963-aa79dcee981d?w=800",
            desc: `
                Uma experiência completa sobre UX/UI, psicologia do usuário,
                microinterações e criação de interfaces impactantes.
            `,
            schedule: [
                ["10h00", "Introdução ao UX"],
                ["12h00", "Arquitetura de informação"],
                ["15h00", "UI moderna"],
                ["17h00", "Prototipação"]
            ]
        },

        7: {
            title: "CyberSecurity Experience",
            img: "https://images.unsplash.com/photo-1581094651181-35942459ef62?w=800",
            desc: `
                Um treinamento prático sobre segurança digital, análise de vulnerabilidades,
                simulações de ataques e defesa em tempo real.
            `,
            schedule: [
                ["15h00", "Introdução"],
                ["16h00", "Pentest prático"],
                ["18h00", "Forense digital"],
                ["20h00", "Live demo"]
            ]
        },

        8: {
            title: "Node.js Performance Lab",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800",
            desc: `
                Explore técnicas avançadas de otimização para aplicações Node.js,
                incluindo clustering, streams, profiling e arquitetura escalável.
            `,
            schedule: [
                ["17h00", "Fundamentos"],
                ["18h00", "Performance avançada"],
                ["19h00", "Profiling"],
                ["21h00", "Encerramento"]
            ]
        },

        9: {
            title: "Cloud Architecture Bootcamp",
            img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800",
            desc: `
                Bootcamp essencial para quem deseja dominar arquiteturas em nuvem,
                computação distribuída, containers, escalabilidade e práticas modernas.
            `,
            schedule: [
                ["11h00", "Introdução à nuvem"],
                ["12h00", "Containers e escalabilidade"],
                ["14h00", "Arquiteturas distribuídas"],
                ["16h00", "Terraform e IaC"]
            ]
        }
    };

    const e = events[id];

    return `
        <img src="${e.img}" style="width:100%; border-radius:20px; margin-bottom:20px;">
        <span class="tag">Evento</span>
        <h1>${e.title}</h1>
        <p>${e.desc}</p>

        <button class="btn" onclick="confirmEvent(${id})">Inscrever-se</button>

        <h2>Programação</h2>
        <table>
            ${e.schedule.map(i => `<tr><td>${i[0]}</td><td>${i[1]}</td></tr>`).join("")}
        </table>

        <button class="back" onclick="backToList()">Voltar</button>
    `;
}
