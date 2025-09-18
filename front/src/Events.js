import { useEffect, useState } from "react";
import api from "./api";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    starts_at: "",
    ends_at: "",
    location: "",
  });

  async function load() {
    const { data } = await api.get("/events");
    setEvents(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function create(e) {
    e.preventDefault();
    await api.post("/events", form);
    setForm({ title: "", starts_at: "", ends_at: "", location: "" });
    await load();
  }

  return (
    <div style={{ maxWidth: 640, margin: "2rem auto", fontFamily: "system-ui" }}>
      <h1>Eventos</h1>

      <form onSubmit={create} style={{ display: "grid", gap: 8, marginBottom: 24 }}>
        <input
          placeholder="Título"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          value={form.starts_at}
          onChange={(e) => setForm({ ...form, starts_at: e.target.value })}
          required
        />
        <input
          type="datetime-local"
          value={form.ends_at}
          onChange={(e) => setForm({ ...form, ends_at: e.target.value })}
          required
        />
        <input
          placeholder="Local"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          required
        />
        <button type="submit">Criar</button>
      </form>

      <ul style={{ display: "grid", gap: 8 }}>
        {events.map((ev) => (
          <li key={ev.id} style={{ padding: 12, border: "1px solid #ddd", borderRadius: 8 }}>
            <strong>{ev.title}</strong><br />
            {new Date(ev.starts_at).toLocaleString()} → {new Date(ev.ends_at).toLocaleString()}<br />
            {ev.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
