// Reasons.jsx — numbered reason rows. Modeled after Grüns: alternating image/text,
// numbered heading, short problem→solution paragraphs, no CTA.

const reasonsStyles = {
  section: {
    background: 'var(--paper-2)',
    padding: '40px 14px 32px',
    position: 'relative',
  },
  chevronDivider: {
    position: 'absolute',
    top: -1,
    left: 0,
    width: '100%',
    height: 40,
    display: 'block',
    pointerEvents: 'none',
  },
  row: {
    background: 'var(--paper-3)',
    borderRadius: 18,
    padding: 18,
    maxWidth: 720,
    margin: '0 auto 28px',
    border: '1.5px solid var(--ink)',
    boxShadow: '6px 6px 0 var(--ink)',
    overflow: 'hidden',
  },
  rowLast: {
    marginBottom: 0,
  },
  rule: {
    height: 2,
    background: 'var(--green)',
    border: 0,
    borderRadius: 1,
    margin: '0 0 18px',
  },
  lede: {
    fontWeight: 700,
    color: 'var(--accent)',
  },
  imgPh: {
    width: '100%',
    aspectRatio: '4 / 5',
    background:
      'repeating-linear-gradient(135deg, var(--ph-1) 0 12px, var(--ph-2) 12px 24px)',
    border: '1px solid var(--rule)',
    borderRadius: 14,
    display: 'flex',
    alignItems: 'flex-end',
    padding: 14,
    margin: '0 0 18px',
    overflow: 'hidden',
    position: 'relative',
  },
  imgPhPhoto: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  imgPhLabel: {
    background: 'var(--paper)',
    border: '1px solid var(--rule)',
    padding: '4px 8px',
    borderRadius: 4,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    fontSize: 10,
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    color: 'var(--ink-soft)',
  },
  headRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    margin: '0 0 14px',
  },
  badge: {
    flex: '0 0 auto',
    width: 52,
    height: 52,
    borderRadius: '50%',
    background: 'var(--accent)',
    color: 'var(--accent-on)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'var(--font-display)',
    fontWeight: 800,
    fontSize: 24,
    letterSpacing: '-0.02em',
    lineHeight: 1,
    boxShadow: '0 1px 0 rgba(0,0,0,0.04), 0 6px 14px rgba(48,8,4,0.18)',
  },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: 'clamp(22px, 5.6vw, 28px)',
    lineHeight: 1.15,
    letterSpacing: '-0.005em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    margin: 0,
    textWrap: 'balance',
    flex: 1,
    minWidth: 0,
  },
  p: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.6,
    color: 'var(--ink)',
    margin: '0 0 14px',
    textWrap: 'pretty',
  },
  pLast: {
    margin: 0,
  },
};

function ReasonImage({ label, src, alt }) {
  return (
    <div style={reasonsStyles.imgPh}>
      {src ? (
        <img src={src} alt={alt || label} style={reasonsStyles.imgPhPhoto} loading="lazy" />
      ) : (
        <span style={reasonsStyles.imgPhLabel}>{label}</span>
      )}
    </div>
  );
}

function Reason({ index, total, eyebrow, headline, body, imageLabel, imageSrc }) {
  const isLast = index === total;
  return (
    <div
      className="reasons-row rail"
      style={{ ...reasonsStyles.row, ...(isLast ? reasonsStyles.rowLast : {}) }}
      data-screen-label={`02 Reason ${String(index).padStart(2, '0')}`}
    >
      <div className="reasons-row-img">
        <ReasonImage label={imageLabel} src={imageSrc} />
      </div>
      <div className="reasons-row-text">
        <div style={reasonsStyles.headRow}>
          <span style={reasonsStyles.badge} aria-label={eyebrow}>{index}</span>
          <h3 style={reasonsStyles.h}>{window.tmify(headline)}</h3>
        </div>
        <hr style={reasonsStyles.rule} />
        {body.map((para, i) => {
          const last = i === body.length - 1;
          const baseStyle = { ...reasonsStyles.p, ...(last ? reasonsStyles.pLast : {}) };
          if (typeof para === 'string') {
            return <p key={i} style={baseStyle}>{window.tmify(para)}</p>;
          }
          return (
            <p key={i} style={baseStyle}>
              <span style={reasonsStyles.lede}>{window.tmify(para.lede)}</span>
              {para.tail ? <> {window.tmify(para.tail)}</> : null}
            </p>
          );
        })}
      </div>
    </div>
  );
}

function Reasons() {
  return (
    <section style={reasonsStyles.section}>
      <svg
        style={reasonsStyles.chevronDivider}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon points="0,0 720,80 1440,0 1440,0 0,0" fill="var(--paper)" />
      </svg>
      <Reason
        index={1}
        total={7}
        eyebrow="Reason 01"
        headline={'The \u201cKeto-Friendly\u201d Chocolate In Your Pantry Is The Thing Breaking Your Keto'}
        imageLabel="REASON 01 · IMAGE"
        imageSrc="assets/reasons/mobile/r1.webp"
        body={[
          'The bars with **the green leaf on the wrapper.** The chips with **the \u201cketo-friendly\u201d label.** The sugar-free chocolate squares at the checkout aisle of your health food store.',
          'You bought them because **you were doing the right thing.** You were swapping real chocolate for \u201cketo chocolate.\u201d **You were being good.**',
          { lede: 'And then somewhere around 45 minutes later, you were sprinting to the bathroom.' },
          'Sugar alcohols \u2014 **erythritol, maltitol, the whole family** \u2014 are in almost every keto chocolate on the shelf. They\u2019re marketed as the clean swap. **They\u2019re not.** And at the dose most women eat when they\u2019re actually craving chocolate, **the GI effects are their own kind of punishment.**',
          'The cooling aftertaste. The cramping. The bloating. **The running-to-the-bathroom nobody talks about at brunch.**',
          { lede: 'And here\u2019s the part that really stings:', tail: '**sugar alcohols can still spike insulin in a lot of people.** Which means the \u201cketo\u201d chocolate you bought to stay in ketosis is **the exact thing quietly knocking you out of it.**' },
          'Cheerific has **zero sugar alcohols. Zero erythritol. Zero maltitol.** Zero of the cooling-mouthfeel Frankenfood that\u2019s been wrecking your gut and stalling your progress for months.',
          '**Less than 1g of sugar per serving. Real cocoa. Real chocolate taste. No sprint to the bathroom.**',
        ]}
      />
      {[
        {
          n: 2,
          headline: "The 10pm Pantry Raid Isn\u2019t A Willpower Problem. It\u2019s A Wiring Problem.",
          body: [
            '**Every keto woman knows this moment.**',
            'It\u2019s 10pm. The kids are down. The kitchen is clean. **You\u2019ve done everything right all day.** And then, like clockwork, **your brain sends you to the pantry.**',
            'You\u2019ve told yourself you\u2019ll beat it with willpower. You\u2019ve told yourself you just need to \u201ctry harder.\u201d You\u2019ve read the motivational thread that said *the pantry at midnight is undefeated.*',
            { lede: 'Here\u2019s the truth nobody on keto Instagram will tell you:', tail: 'the 10pm craving **isn\u2019t a character flaw. It\u2019s a chemistry loop.** Decades of eating chocolate in the evening **trains your brain to release dopamine at that exact time of night** \u2014 whether chocolate shows up or not. The craving isn\u2019t hunger. **It\u2019s a missing neurotransmitter hit your brain is asking for on a schedule.**' },
            '**You can\u2019t out-discipline a 30-year habit loop. But you can satisfy it.**',
            'Cheerific is built around **Chocamine\u00ae** \u2014 a patented, clinically studied cocoa extract that delivers the calm, feel-good lift of real chocolate **without caffeine and without sugar.** It hits the same dopamine circuit your brain is asking for at 10pm \u2014 but with **zero sugar crash, zero insulin spike, and zero \u201cI just blew 47 days\u201d regret at 10:04.**',
            '***You\u2019re not weak. You\u2019re wired. There\u2019s a difference.***',
            '**One creamy mug. Sixty seconds. The pantry stays closed.**',
          ],
        },
        {
          n: 3,
          headline: "Why Keto Flu Hits Women Over 40 Harder Than Anyone Warned You",
          body: [
            'You read the blogs. You knew to expect the **\u201cketo flu.\u201d**',
            'What the blogs didn\u2019t tell you is that in your 40s, **it doesn\u2019t land like a flu. It lands like a personality change.**',
            'The 2am wake-up where you\u2019re suddenly **hot, then freezing, then furious.** The anxiety that sits on your chest for no reason. The mood that swings hard at your husband over something that **would have been a non-event five years ago.** The afternoon energy crash that used to be manageable and now **takes you out at the knees.**',
            { lede: 'Most keto content blames electrolytes.', tail: 'Drink more salt, they say. Pour the electrolyte packet in your water bottle. *Choke down the ocean water.*' },
            '**But sodium doesn\u2019t fix sleep. Sodium doesn\u2019t fix mood. Sodium doesn\u2019t fix the gut-brain static** that hits harder after 40 than it did in your 30s.',
            'Cheerific includes **CP2305** \u2014 a clinically studied postbiotic (sometimes called a psychobiotic) shown to support **calm mood, digestive comfort under stress, and better sleep quality during stressful periods.** *',
            'It\u2019s not an energy ingredient. It\u2019s not a stimulant. It\u2019s **quiet, daily support for the gut-brain connection** that runs underneath the mood swings, the 2am wake-ups, and the afternoon collapse.',
            'A few weeks in, most women describe the same thing: ***the static isn\u2019t as loud anymore.***',
          ],
        },
        {
          n: 4,
          headline: "The Keto Stall Nobody Explains (And The Gut-Brain Reset Nobody Talks About)",
          body: [
            'Three weeks in. **Scale won\u2019t move.** Macros are dialed. You\u2019re in ketosis \u2014 **the strips say so, the meter says so** \u2014 and nothing.',
            'The stall is **the moment most women quit.** Not because the diet is hard, but because **you\u2019ve done everything right and the scale still laughed at you.** Every keto forum is full of the same sentence: *I\u2019ve been stalled for six weeks and I want to scream.*',
            { lede: 'Here\u2019s what almost nobody in the keto world is telling you:', tail: 'a lot of stalls aren\u2019t a macro problem. **They\u2019re a gut-brain communication problem.** The \u201cketo-friendly\u201d Frankenfood, the sugar alcohols, the missing fiber, the stress-wrecked microbiome \u2014 all of it adds up to **a gut that isn\u2019t talking to your brain the way it used to.** And when that conversation gets staticky, weight loss stalls regardless of how perfect your carbs are.' },
            'Cheerific quietly addresses this from **a completely different angle than any keto supplement on the market.**',
            '**17 organic superfoods** \u2014 chlorella, kale, spinach, broccoli, beet, acai, blueberry, pomegranate, acerola cherry, and nine more \u2014 delivering **the plant-based nutrient diversity most keto diets are catastrophically missing.** Plus **CP2305** for the gut-brain conversation underneath it all.',
            '***You\u2019re not choking down kale. You\u2019re sipping dessert.*** Your gut is getting **what it\u2019s been quietly asking for.**',
          ],
        },
        {
          n: 5,
          headline: "Real Fiber. The Unsexy Keto Truth No One Wants To Say Out Loud.",
          body: [
            'Let\u2019s talk about **the thing nobody will talk about on a keto podcast.**',
            { lede: 'I haven\u2019t pooped in six days.' },
            'It\u2019s **the single most-reported side effect on every keto forum on the internet.** It\u2019s also the one **nobody will mention at a dinner party.** The low-fiber reality of keto hits women over 40 particularly hard \u2014 and the \u201csolution\u201d most keto influencers offer is psyllium husk, magnesium citrate, or **a three-day cleanse week that feels like the stomach flu on purpose.**',
            'Each scoop of Cheerific delivers **approximately 4g of real fiber from actual food sources** \u2014 gently woven into the cocoa, greens, and fruit blends. **Not a harsh cleanse. Not a laxative. Not a regret cycle.**',
            'Just **real, daily fiber doing real, daily work.**',
            'As one customer put it:',
            '*\u201cSo delicious and it def makes you go!!\u201d*',
            'We\u2019ll let that one speak for itself.',
            '***Results may vary.****',
          ],
        },
        {
          n: 6,
          headline: "Somewhere In The Last Two Years, Your Life Got Smaller. That Wasn\u2019t The Deal.",
          body: [
            'Keto was supposed to give you your body back.',
            '**Nobody mentioned it might quietly take your life with it.**',
            'You turn down the dinner invitation because **you can\u2019t deal with the menu.** You skip your kid\u2019s pizza night because **one slice feels like a cliff.** You sit at the work party with **a plain chicken breast on a napkin** while everyone else has cake, and you feel, in that specific moment, **a little insane.** Date night used to be your favorite thing. Now it\u2019s **a 40-minute audit of every appetizer.**',
            'Somewhere along the way, **\u201cdoing keto\u201d became your whole personality.** And the woman you used to be \u2014 the one who said yes, who ordered the thing, who didn\u2019t calculate every bite \u2014 **she got smaller and smaller in the rearview mirror.**',
            { lede: 'Here\u2019s the part that matters:' },
            'Cheerific **isn\u2019t asking you to be more disciplined.** It isn\u2019t another rule. It isn\u2019t another thing to white-knuckle through.',
            'It\u2019s **a 60-second mug of creamy dark chocolate that tastes like dessert** \u2014 because it basically is \u2014 and quietly does the work underneath **while you get on with your actual life.** No menu audit. No Sunday meal-prep marathon. **No \u201cI\u2019ll just have water, thanks.\u201d**',
            '***One ritual. Sixty seconds. And the rest of the day, you get to be a person again.***',
          ],
        },
        {
          n: 7,
          headline: "You Feel It Build. Day 1, Week 2, Week 8. The Way Real Things Do.",
          body: [
            '**Almost nothing in the keto world is built for you.**',
            'Not the bars. Not the chips. Not the electrolyte packets that **taste like ocean water.** Not the meal-prep marathon that **ate your Sunday.** Not the MCT oil that **sends you running to the bathroom at 7am.** Not the ketone shots your friend is selling on Facebook.',
            'Cheerific is. And women describe the experience the same way, in stages.',
            '**Day 1:** That\u2019s **Chocamine\u00ae** doing its work. The 10pm craving hits \u2014 and this time, instead of a pantry raid, **there\u2019s a mug of creamy dark chocolate. Calm. Satisfied.** The ritual that used to cost you 47 days of progress now takes **60 seconds and costs you nothing.**',
            '**Week 2:** The **CP2305** postbiotic starts doing its quiet work underneath it all. **Mood, a little more even. Sleep, a little more restful.** The 2am wake-ups soften. **The afternoon crash isn\u2019t a cliff anymore.** *',
            '**Week 8:** The sentence we hear over and over: ***\u201cI feel like myself again.\u201d*** Not reinvented. Not \u201ca new you.\u201d **Just recovered.** The woman who says yes to dinner. The woman who orders the thing. **The Monday restart cycle, finally over.**',
            'It won\u2019t fix everything in a week. It\u2019s **a 60-second daily ritual that builds the way real things do.**',
          ],
        },
      ].map((r) => (
        <Reason
          key={r.n}
          index={r.n}
          total={7}
          eyebrow={`Reason 0${r.n}`}
          headline={r.headline}
          imageLabel={`REASON 0${r.n} · IMAGE`}
          imageSrc={`assets/reasons/mobile/r${r.n}.webp`}
          body={r.body}
        />
      ))}
    </section>
  );
}

Object.assign(window, { Reasons });
