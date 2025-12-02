import React, { useState, useEffect } from "react";

interface University {
  name: string;
  ranking: string;
  citySize: string;
  climate: string;
  vagas2025: string;
  notaCorte2025: string;
  vagas2024: string;
  notaCorte2024: string;
}

// -------------------------
//  ALL UNIVERSITIES (2024 + 2025)
// -------------------------
const allUniversities: University[] = [
  { name: "La Sapienza", ranking: "🇮🇹 #4 IT | 🌍 US #128 | QS #134 | THE #181", citySize: "Roma – 2.750.000", climate: "Mediterrâneo",
    vagas2025: "13", notaCorte2025: "65.8",
    vagas2024: "13", notaCorte2024: "73.8"
  },

  { name: "Milano Statale", ranking: "🇮🇹 #3 IT | 🌍 US #156 | QS #276 | THE 201–250", citySize: "Milão – 1.370.000", climate: "Subtropical úmido",
    vagas2025: "15", notaCorte2025: "72.9",
    vagas2024: "15", notaCorte2024: "75.3"
  },

  { name: "Pavia", ranking: "🇮🇹 #8 IT | 🌍 US #275 | QS #581–590 | THE 301–350", citySize: "Pavia – 74.000", climate: "Subtropical úmido",
    vagas2025: "40", notaCorte2025: "73",
    vagas2024: "40 (1 Marco Polo)", notaCorte2024: "71.5"
  },

  { name: "Bologna", ranking: "🇮🇹 #2 IT | 🌍 US #112 | QS #154 | THE #155", citySize: "Bolonha – 400.000", climate: "Subtropical úmido",
    vagas2025: "20", notaCorte2025: "70.3",
    vagas2024: "20", notaCorte2024: "74.5"
  },

  { name: "Padova", ranking: "🇮🇹 #1 IT | 🌍 US #124 | QS #236 | THE 201–250", citySize: "Pádua – 208.000", climate: "Subtropical úmido",
    vagas2025: "25", notaCorte2025: "65.4",
    vagas2024: "25", notaCorte2024: "71.6"
  },

  { name: "Roma Tor Vergata", ranking: "🇮🇹 #13 IT | 🌍 US #408 | QS #601–650 | THE 301–350", citySize: "Roma – 2.750.000", climate: "Mediterrâneo",
    vagas2025: "20", notaCorte2025: "69.1",
    vagas2024: "15", notaCorte2024: "60.6"
  },

  { name: "Tor Vergata (Tirana)", ranking: "Campus internacional", citySize: "Tirana – 520.000", climate: "Mediterrâneo",
    vagas2025: "150", notaCorte2025: "0.0",
    vagas2024: "-", notaCorte2024: "-"
  },

  { name: "Torino", ranking: "🇮🇹 #6 IT | 🌍 US #209 | QS #252 | THE 401–500", citySize: "Turim – 857.000", climate: "Subtropical úmido",
    vagas2025: "32", notaCorte2025: "-",
    vagas2024: "32 (1 Marco Polo)", notaCorte2024: "70.8"
  },

  { name: "Milano Bicocca", ranking: "🇮🇹 #14 IT | 🌍 US #413 | QS #481–490 | THE 251–300", citySize: "Milão – 1.370.000", climate: "Subtropical úmido",
    vagas2025: "18", notaCorte2025: "65.1",
    vagas2024: "18", notaCorte2024: "72.7"
  },

  { name: "Federico II", ranking: "🇮🇹 #5 IT | 🌍 US #186 | QS #351–400 | THE 351–400", citySize: "Nápoles – 908.000", climate: "Mediterrânico",
    vagas2025: "45", notaCorte2025: "63.1",
    vagas2024: "25", notaCorte2024: "68.1"
  },

  { name: "Parma", ranking: "🇮🇹 #26 IT | 🌍 US #487 | QS #701–750 | THE 501–600", citySize: "Parma – 199.000", climate: "Subtropical úmido",
    vagas2025: "45", notaCorte2025: "67.6",
    vagas2024: "45", notaCorte2024: "59.1"
  },

  { name: "Messina", ranking: "🇮🇹 #29 IT | 🌍 US #573 | QS #751–760 | THE 501–600", citySize: "Messina – 221.000", climate: "Mediterrânico",
    vagas2025: "56", notaCorte2025: "58.2",
    vagas2024: "56", notaCorte2024: "61.8"
  },

  { name: "Luigi Vanvitelli", ranking: "🇮🇹 — | 🌍 — | QS #1201–1400 | THE 501–600", citySize: "Caserta – 75.000", climate: "Mediterrânico",
    vagas2025: "50", notaCorte2025: "66.2",
    vagas2024: "50", notaCorte2024: "63.2"
  },

  { name: "Bari", ranking: "🇮🇹 #31 IT | 🌍 US #603 | QS #801–850 | THE 501–600", citySize: "Bari – 320.000", climate: "Mediterrânico",
    vagas2025: "11", notaCorte2025: "49.3",
    vagas2024: "8", notaCorte2024: "65.8"
  },

  { name: "Catania", ranking: "🇮🇹 #33 IT | 🌍 US #693 | QS #951–1000 | THE 601–800", citySize: "Catania – 310.000", climate: "Mediterrânico",
    vagas2025: "60", notaCorte2025: "61.6",
    vagas2024: "30", notaCorte2024: "57.2"
  },

  { name: "Marche (Ancona)", ranking: "🇮🇹 — | 🌍 — | QS — | THE —", citySize: "Ancona – 100.000", climate: "Subtropical úmido",
    vagas2025: "60", notaCorte2025: "58.2",
    vagas2024: "60", notaCorte2024: "60.3"
  },

  { name: "Cagliari", ranking: "🇮🇹 #36 IT | 🌍 US #653 | QS #716 | THE 601–800", citySize: "Cagliari – 147.000", climate: "Mediterrânico",
    vagas2025: "20", notaCorte2025: "54.2",
    vagas2024: "20", notaCorte2024: "56.5"
  }
];

function getUniversityData(name: string): University | undefined {
  return allUniversities.find(u => u.name === name);
}

function combineListsByPosition(lists: string[][], length: number): string[] {
  const chosen = new Set<string>();
  const result: string[] = [];

  for (let pos = 0; pos < length; pos++) {
    const freq: Record<string, number> = {};
    for (const list of lists) {
      if (pos < list.length) {
        const uni = list[pos];
        if (!chosen.has(uni)) {
          freq[uni] = (freq[uni] || 0) + 1;
        }
      }
    }

    let maxFreq = -1;
    let candidate: string | null = null;
    for (const [uni, count] of Object.entries(freq)) {
      if (count > maxFreq) {
        maxFreq = count;
        candidate = uni;
      }
    }

    if (!candidate) {
      outer: for (const list of lists) {
        for (const uni of list) {
          if (!chosen.has(uni)) {
            candidate = uni;
            break outer;
          }
        }
      }
    }

    if (candidate) {
      chosen.add(candidate);
      result.push(candidate);
    }
  }

  return result;
}

function ListEditor({ title, list, setList, field }: {
  title: string;
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
  field: keyof University;
}) {
  const moveUp = (index: number) => {
    if (index === 0) return;
    const newList = [...list];
    [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
    setList(newList);
  };

  const moveDown = (index: number) => {
    if (index === list.length - 1) return;
    const newList = [...list];
    [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
    setList(newList);
  };

  const copyToClipboard = () => {
    const text = list.join("\n");
    navigator.clipboard.writeText(text);
    alert(`Lista "${title}" copiada para a área de transferência`);
  };

  return (
    <div style={{ minWidth: 300, border: "1px solid #ccc", padding: 12, borderRadius: 8, margin: 8, flex: 1, overflowY: "auto", maxHeight: 500, backgroundColor: "white", color: "black" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ fontWeight: "bold", margin: 0 }}>{title}</h3>
        <button onClick={copyToClipboard} style={{ backgroundColor: "#007bff", color: "white", border: "none", borderRadius: 4, padding: '6px 10px', cursor: 'pointer' }}>📋 Copiar lista</button>
      </div>
      <ol>
        {list.map((uniName, i) => {
          const data = getUniversityData(uniName);
          return (
            <li key={uniName} style={{ marginBottom: 8 }}>
              <strong>{uniName}</strong><br />
              <span style={{ fontSize: 12 }}>
                {field === "ranking" && <>Ranking: {data?.ranking}</>}
                {field === "climate" && <>Clima: {data?.climate}</>}
                {field === "citySize" && <>População: {data?.citySize}</>}
                {field === "vagas2025" && <>Vagas 2025: {data?.vagas2025}</>}
                {field === "notaCorte2025" && <>Nota de corte 2025: {data?.notaCorte2025}</>}
              </span>
              <div style={{ marginTop: 6 }}>
                <button onClick={() => moveUp(i)} style={{ backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: 4, padding: '4px 8px', marginRight: 6 }} disabled={i === 0}>↑</button>
                <button onClick={() => moveDown(i)} style={{ backgroundColor: '#c62828', color: 'white', border: 'none', borderRadius: 4, padding: '4px 8px' }} disabled={i === list.length - 1}>↓</button>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

// -------------------------
//  MAIN COMPONENT
// -------------------------
export default function App() {
  const [clima, setClima] = useState<string[]>(allUniversities.map(u => u.name));
  const [ranking, setRanking] = useState<string[]>(allUniversities.map(u => u.name));
  const [cidade, setCidade] = useState<string[]>(allUniversities.map(u => u.name));
  const [vagas, setVagas] = useState<string[]>(allUniversities.map(u => u.name));
  const [notaCorte, setNotaCorte] = useState<string[]>(allUniversities.map(u => u.name));
  const [combined, setCombined] = useState<string[]>([]);

  useEffect(() => {
    const combinedList = combineListsByPosition(
      [clima, ranking, cidade, vagas, notaCorte],
      allUniversities.length
    );
    setCombined(combinedList);
  }, [clima, ranking, cidade, vagas, notaCorte]);

  const moveCombinedUp = (index: number) => {
    if (index === 0) return;
    const newList = [...combined];
    [newList[index - 1], newList[index]] = [newList[index], newList[index - 1]];
    setCombined(newList);
  };

  const moveCombinedDown = (index: number) => {
    if (index === combined.length - 1) return;
    const newList = [...combined];
    [newList[index + 1], newList[index]] = [newList[index], newList[index + 1]];
    setCombined(newList);
  };

  const copyFinalList = () => {
    const text = combined.map((uni, i) => {
      const d = getUniversityData(uni);
      return `${i + 1}. ${uni} — Vagas 2025: ${d?.vagas2025} | Nota 2025: ${d?.notaCorte2025}`;
    }).join("\n");
    navigator.clipboard.writeText(text);
    alert("Lista final copiada para a área de transferência");
  };

  return (
    <div style={{ backgroundColor: "#fff", color: "#000", fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1 style={{ textAlign: "center", marginBottom: 18 }}>ChooseMed — NON-EU 2025</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ListEditor title="Clima" list={clima} setList={setClima} field="climate" />
        <ListEditor title="Ranking" list={ranking} setList={setRanking} field="ranking" />
        <ListEditor title="Tamanho da cidade" list={cidade} setList={setCidade} field="citySize" />
        <ListEditor title="Número de vagas (2025)" list={vagas} setList={setVagas} field="vagas2025" />
        <ListEditor title="Notas de corte (2025)" list={notaCorte} setList={setNotaCorte} field="notaCorte2025" />
      </div>

      <section style={{ marginTop: 30 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontWeight: "bold", margin: 0 }}>Lista final</h2>
          <div>
            <button onClick={copyFinalList} style={{ backgroundColor: "#007bff", color: "white", border: "none", borderRadius: 6, padding: '8px 12px', cursor: 'pointer', marginRight: 8 }}>📋 Copiar lista</button>
          </div>
        </div>

        <ol style={{ marginTop: 12 }}>
          {combined.map((uni, i) => {
            const data = getUniversityData(uni);
            return (
              <li key={uni} style={{ marginBottom: 12 }}>
                <strong>{i + 1}. {uni}</strong><br />
                <span style={{ fontSize: 13 }}>
                  Clima: {data?.climate} | Ranking: {data?.ranking} | Cidade: {data?.citySize}  
                  | Vagas 2025: {data?.vagas2025} | Nota 2025: {data?.notaCorte2025}
                </span>
                <div style={{ marginTop: 6 }}>
                  <button onClick={() => moveCombinedUp(i)} style={{ backgroundColor: '#2e7d32', color: 'white', border: 'none', borderRadius: 4, padding: '4px 8px', marginRight: 6 }} disabled={i === 0}>↑</button>
                  <button onClick={() => moveCombinedDown(i)} style={{ backgroundColor: '#c62828', color: 'white', border: 'none', borderRadius: 4, padding: '4px 8px' }} disabled={i === combined.length - 1}>↓</button>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
