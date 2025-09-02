const { useState, useEffect } = React;
const { Container, Typography, Box, Button, TextField, IconButton, Stack, Dialog, DialogTitle, DialogContent, DialogActions } = MaterialUI;
/*const { AddRounded, ArrowUpwardRounded } = MaterialUIIcons;*/
const { Icon } = MaterialUI;

const COLORS = { primary: "#007BFF", dark: "#12242e", light: "#f2f7fb" };

function StepUpHomePage() {
  const [page, setPage] = useState("home");
  const [lang, setLang] = useState("it");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved) { setLang(saved); return; }
    } catch {}
    const browserLang = typeof navigator !== "undefined" ? (navigator.language || navigator.userLanguage) : "it";
    if (browserLang && !String(browserLang).toLowerCase().startsWith("it")) setLang("en");
  }, []);

  const switchToLang = (newLang) => { setLang(newLang); try { localStorage.setItem("lang", newLang); } catch {} };
  const goHome = () => setPage("home");

  const renderChiSiamo = () => (
    <Container maxWidth="lg" sx={{ py: 10, textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 6, color: COLORS.dark }}>{lang === "it" ? "Chi siamo" : "About us"}</Typography>
      <Stack direction={{ xs: "column", md: "row" }} spacing={6} justifyContent="center">
        <Box sx={{ maxWidth: 400 }}>
          <Typography variant="h5" sx={{ mb: 2, color: COLORS.dark }}>Francesco Fantasia</Typography>
          <Typography variant="body1" sx={{ color: "#475569", mb: 2 }}>{lang === "it"
            ? "Da sempre mi piace capire cosa le persone vogliono davvero. StepUp nasce proprio da qui: ascoltare, osservare e trasformare i bisogni reali in un prodotto semplice, utile e motivante. La mia parte è la visione e il contatto con le persone: il mio obiettivo è far sì che StepUp sia costruito su misura per chi si allena o allena altre persone, non per le mode del momento."
            : "I've always liked to understand what people really want. StepUp was born from listening, observing and transforming real needs into a simple, useful and motivating product. My role is vision and contact with people: my goal is to ensure StepUp is built around those who train or coach, not around trends."}</Typography>
          <Button variant="outlined" href="https://www.linkedin.com/in/francesco-fantasia-907740253/" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
        </Box>
        <Box sx={{ maxWidth: 400 }}>
          <Typography variant="h5" sx={{ mb: 2, color: COLORS.dark }}>Matteo Di Fraia</Typography>
          <Typography variant="body1" sx={{ color: "#475569", mb: 2 }}>{lang === "it"
            ? "Sono la parte tecnologica del team. Amo trasformare le idee in prodotti funzionanti, solidi e concreti. Con Francesco lavoro fianco a fianco da oltre sei anni e StepUp è il terzo progetto che costruiamo insieme, anche se in realtà ci conosciamo da quando avevamo 5 anni."
            : "I'm the technological part of the team. I love turning ideas into working, solid and concrete products. Francesco and I have been working side by side for over six years and StepUp is the third project we are building together, although we've actually known each other since we were 5 years old."}</Typography>
          <Button variant="outlined" href="mailto:matteodifraia@stepup-fitness.com">{lang === "it" ? "Invia Email" : "Send Email"}</Button>
        </Box>
      </Stack>
    </Container>
  );

  const renderPercheStepUp = () => (
    <Container maxWidth="lg" sx={{ py: 10 }}>
      <Typography variant="h3" sx={{ fontWeight: 800, mb: 6, color: COLORS.dark, textAlign: "center" }}>{lang === "it" ? "Ecco perché StepUp" : "Why StepUp"}</Typography>
      <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "left" }}>
        <Typography variant="body1" sx={{ color: "#475569", mb: 3 }}>{lang === "it"
          ? "Che tu voglia tracciare i tuoi allenamenti o che tu sia un trainer e voglia creare e seguire i programmi di altre persone, con StepUp puoi dimenticarti di mille fogli Excel o della carta e penna."
          : "Whether you want to track your workouts or you're a trainer who wants to create and follow other people's programs, with StepUp you can forget about countless Excel sheets or pen and paper."}</Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.dark, mb: 2 }}>{lang === "it" ? "Ti basta usare il tuo cellulare:" : "All you need is your phone:"}</Typography>
        <ul style={{ color: "#475569", marginBottom: 24 }}>
          <li>{lang === "it" ? "Hai già una scheda cartacea? Fai una foto e viene importata." : "Already have a paper plan? Take a photo and it gets imported."}</li>
          <li>{lang === "it" ? "Hai la scheda in un file Excel o simile? Caricala in un attimo." : "Have the plan in an Excel file or similar? Upload it instantly."}</li>
          <li>{lang === "it" ? "L’hai scritta su un blocco note o in un documento di testo? Copia e incolla, e sei subito pronto." : "Wrote it in a note or text document? Copy-paste and you're ready."}</li>
        </ul>
        <Typography variant="body1" sx={{ color: "#475569", mb: 3 }}>{lang === "it"
          ? "Così in pochi secondi puoi allenarti e tracciare tutto, con timer, video tutorial e supporto intelligente sempre a portata di mano."
          : "In just seconds you can train and track everything, with timers, video tutorials and intelligent support always at hand."}</Typography>
        <Typography variant="body1" sx={{ color: "#475569", mb: 3 }}>{lang === "it"
          ? "Vuoi creare e inviare una scheda? Ti basta scriverla (o importarla) e dire 'inviala a @francesco': la persona la riceverà subito. Lo stesso vale per modificare, aggiornare o duplicare schede."
          : "Want to create and send a plan? Just write it (or import it) and say 'send it to @francesco': they'll get it instantly. The same goes for modifying, updating or duplicating plans."}</Typography>
        <Typography variant="body1" sx={{ color: "#475569", mb: 3 }}>{lang === "it"
          ? "In più puoi chiedere al volo: 'Dammi il grafico dei progressi' oppure 'Suggeriscimi una progressione, oggi ho molte energie' e StepUp ti mostrerà subito ciò che ti serve."
          : "You can also quickly ask: 'Show me my progress graph' or 'Suggest me a progression, I have lots of energy today' and StepUp will immediately show what you need."}</Typography>
        <Typography variant="body1" sx={{ color: "#475569", mb: 3 }}>{lang === "it"
          ? "E non hai limiti: puoi usare qualsiasi esercizio, tecnica di intensità o metodo che preferisci per il tuo allenamento."
          : "And you have no limits: use any exercise, intensity technique or method you prefer for your training."}</Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, color: COLORS.dark, mb: 2 }}>{lang === "it" ? "Perché è utile?" : "Why is it useful?"}</Typography>
        <Typography variant="body1" sx={{ color: "#475569", mb: 4 }}>{lang === "it"
          ? "Perché elimina ogni perdita di tempo: niente più schede ricopiate a mano, file sparsi o strumenti diversi da gestire. Con StepUp tutto è veloce, immediato e semplice. Così puoi concentrarti davvero sull’allenamento, senza la burocrazia che ti rallenta."
          : "Because it eliminates wasted time: no more hand-copied plans, scattered files or multiple tools to manage. With StepUp everything is fast, immediate and simple. So you can truly focus on training, without the bureaucracy slowing you down."}</Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button component="a" href="https://t.me/+g3JEB1kYJtFjNzQ0" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ bgcolor: COLORS.primary, fontWeight: "bold", px: 3 }}>
            {lang === "it" ? "Entra nel canale Telegram" : "Join the Telegram channel"}
          </Button>
        </Box>
      </Box>
    </Container>
  );

  return (
    <Box sx={{ position: "relative", bgcolor: "#fff", color: "#0f1720", minHeight: "100vh", overflow: "hidden" }}>
      <Box aria-hidden sx={{ position: "absolute", inset: 0, background: `
          radial-gradient(1200px 600px at 50% 0%, rgba(0,123,255,0.12), transparent 60%),
          radial-gradient(1000px 600px at 50% 100%, rgba(18,36,46,0.10), transparent 60%),
          radial-gradient(800px 500px at 50% 50%, rgba(0,123,255,0.08), transparent 70%)`, filter: "blur(0px)", pointerEvents: "none" }} />
      <Container maxWidth="lg" sx={{ py: 2, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: -0.3, color: COLORS.dark, cursor: "pointer" }} onClick={goHome}>StepUp</Typography>
        <Stack direction="row" spacing={1}>
          <Button size="small" sx={{ textTransform: "none" }} color="inherit" onClick={() => setPage("chi-siamo")}>{lang === "it" ? "Chi siamo" : "About us"}</Button>
          <Button size="small" sx={{ textTransform: "none" }} color="inherit" onClick={() => setPage("perche-stepup")}>{lang === "it" ? "Perché StepUp" : "Why StepUp"}</Button>
        </Stack>
      </Container>

      {page === "chi-siamo" ? renderChiSiamo() : page === "perche-stepup" ? renderPercheStepUp() : (
        <>
          <Container data-testid="hero-container" maxWidth="lg" sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 6, md: 8 }, textAlign: "center" }}>
            <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, letterSpacing: -1, color: COLORS.dark }}>{lang === "it" ? "Fai uno step avanti" : "Take a step forward"}</Typography>
            <Typography variant="h5" sx={{ color: "#475569", mb: 1 }}>{lang === "it"
              ? "Crea, importa, invia ed esegui programmi di allenamento. Analizza i progressi e setta progressioni."
              : "Create, import, send and run training programs. Analyze your progress and set progressions."}</Typography>
            <Typography variant="subtitle1" sx={{ color: COLORS.primary, mb: 5, fontWeight: 600 }}>{lang === "it" ? "Con il supporto di StepUp AI." : "Powered by StepUp AI."}</Typography>

            <Box sx={{ mx: "auto", maxWidth: 900, borderRadius: 5, bgcolor: "#fafafa", boxShadow: "0 10px 30px rgba(18,36,46,0.15)", border: `1px solid ${COLORS.dark}14`, p: 2.5 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="center">
                <IconButton aria-label="new" sx={{ bgcolor: "#fff", border: `1px solid ${COLORS.dark}14` }}><AddRounded /></IconButton>
                <TextField fullWidth placeholder={lang === "it" ? "Chiedi a StepUp AI se stai progredendo" : "Ask StepUp AI if you're progressing"} variant="standard" InputProps={{ disableUnderline: true, sx: { fontSize: 18 } }} />
                <IconButton aria-label="go" onClick={() => setOpenDialog(true)} sx={{ bgcolor: COLORS.primary, color: "#fff" }}><ArrowUpwardRounded /></IconButton>
              </Stack>
            </Box>

            <Box sx={{ mt: 6, maxWidth: 800, mx: "auto" }}>
              <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 4 }}>{lang === "it"
                ? "StepUp è pensato per i trainer e per chi si allena in palestra con passione."
                : "StepUp is designed for trainers and passionate gym-goers."}</Typography>
              <Typography variant="h6" sx={{ color: COLORS.dark, fontWeight: 700, mb: 2 }}>{lang === "it"
                ? "Vuoi saperne di più in anteprima e provarlo prima degli altri?"
                : "Want to know more in advance and try it before others?"}</Typography>
              <Typography variant="body1" sx={{ color: "#475569", mb: 4 }}>{lang === "it" ? "Entra nella lista di attesa prioritaria." : "Join the priority waitlist."}</Typography>
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button component="a" href="https://t.me/+g3JEB1kYJtFjNzQ0" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ bgcolor: COLORS.primary, fontWeight: "bold", px: 3 }}>
                  {lang === "it" ? "Entra nel canale Telegram" : "Join the Telegram channel"}
                </Button>
              </Box>
            </Box>
          </Container>
        </>
      )}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} aria-labelledby="cta-dialog-title">
        <DialogTitle id="cta-dialog-title" sx={{ fontWeight: 800, color: COLORS.dark }}>StepUp</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ color: "#475569", mb: 2 }}>{lang === "it"
            ? "A breve potrai accedere a tutto questo. Nel frattempo, unisciti al gruppo Telegram dedicato per ricevere aggiornamenti in anteprima."
            : "You'll be able to access all of this soon. In the meantime, join the dedicated Telegram group to get early updates."}</Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={() => setOpenDialog(false)} sx={{ textTransform: "none" }}>{lang === "it" ? "Chiudi" : "Close"}</Button>
          <Button component="a" href="https://t.me/+g3JEB1kYJtFjNzQ0" target="_blank" rel="noopener noreferrer" variant="contained" sx={{ bgcolor: COLORS.primary, fontWeight: 700, textTransform: "none" }} onClick={() => setOpenDialog(false)}>
            {lang === "it" ? "Accedi al gruppo Telegram" : "Go to the Telegram group"}
          </Button>
        </DialogActions>
      </Dialog>

      <Box data-testid="footer" sx={{ py: 6, textAlign: "center", color: "#64748b" }}>
        <Typography variant="body2">© {new Date().getFullYear()} StepUp — {lang === "it" ? "Tutti i diritti riservati." : "All rights reserved."}</Typography>
      </Box>

      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        {lang === "it" ? (
          <Button onClick={() => switchToLang("en")} variant="outlined">🇬🇧</Button>
        ) : (
          <Button onClick={() => switchToLang("it")} variant="outlined">🇮🇹</Button>
        )}
      </Box>
    </Box>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StepUpHomePage />);
