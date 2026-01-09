import React from 'react';
import Effects from './components/Effects';
import CustomCursor from './components/CustomCursor';
import Intro from './components/Intro';
import Statement from './components/Statement';
import Timeline from './components/Timeline';
import StorySection from './components/StorySection';
import LoveQuiz from './components/LoveQuiz';
import PromiseGarden from './components/PromiseGarden';
import SecretGallery from './components/SecretGallery';
import MusicPlayer from './components/MusicPlayer';
import LoveLetter from './components/LoveLetter';
import TimeCapsule from './components/TimeCapsule';
import FinalSection from './components/FinalSection';

function App() {
  return (
    <div className="app">
      <CustomCursor />
      <Effects />

      <Intro />
      <Statement />
      <Timeline />

      {/* First Kiss */}
      <StorySection
        id="first-kiss"
        title="The First Kiss"
        date="19 NOVEMBER 2023 • CHATH GHAT, DUDHI"
      >
        <p className="story-line">Dudhi—a place where once we couldn't even imagine meeting, yet there we were, sharing a kiss that felt like destiny catching up with us after patiently waiting for the perfect moment. In that improbable place, at that impossible time, everything made perfect sense for the first time.</p>
        <p className="story-line">That kiss wasn't just a moment; it was a promise written in the most unexpected of places, a secret whispered between two souls who had traveled through fear and uncertainty to find this exact point in time. It told me that love doesn't care about geography or circumstance—it just finds its way, weaving through obstacles with the persistence of a river finding the sea.</p>
        <p className="story-line" style={{ fontStyle: 'italic', marginTop: '2rem' }}>In Dudhi, where we once couldn't imagine meeting, we didn't just meet—we discovered that some kisses feel less like firsts and more like homecomings to a place you never knew you belonged.</p>
      </StorySection>

      {/* Silence */}
      <StorySection
        id="silence"
        title="Silence That Felt Safe"
        date="20 NOVEMBER 2023 • ASSI GHAT"
      >
        <p className="story-line">At Assi Ghat, with your hand resting gently in mine, hours slipped by without a single word because we didn't need any. The Ganges flowed beside us, carrying stories of centuries, but in that quiet space between us, I found a peace I never knew existed.</p>
        <p className="story-line">Your presence was enough—more than enough. In that silence, I learned that the deepest conversations often happen without words, in the quiet understanding between two souls who just fit perfectly together like pieces of a puzzle we didn't know we were solving.</p>
        <p className="story-line" style={{ marginTop: '2rem', fontStyle: 'italic' }}>The day after our first kiss, we discovered that love speaks loudest in silence, and safety feels like your hand in mine while the world continues around us, unnoticed and unimportant.</p>
      </StorySection>

      {/* Home */}
      <StorySection
        id="home"
        title="You Became Home"
        date="EVERY DAY SINCE"
      >
        <p className="story-line">Not a place with walls and a roof, but a feeling that settles deep within my bones. Not an address on a map, but the comfort of your presence wherever we are, whatever we're doing, however far apart we might be physically. You became the calm in my chaos, the light in my darkness, the constant in my changing world.</p>
        <p className="story-line">Wherever you are, that's where I belong—in the quiet comfort of your existence, in the unwavering safety of your love, in the beautiful reality of us. Home isn't a place anymore; it's the sound of your laughter, the look in your eyes when you're happy, the way you say my name. Home is you.</p>
        <p className="story-line" style={{ marginTop: '2rem', color: 'var(--gold)', fontWeight: '300' }}>And I will always find my way back to you, no matter where life takes us, because home isn't where you live—it's who you love.</p>
      </StorySection>

      {/* Daring Continued */}
      <StorySection
        id="daring-continued"
        title="When Randomness Became Fate"
        date="6 MAY 2024 • LANKA GATE"
      >
        <p className="story-line">Lanka Gate—seeing you again after all that time, with no expectations, no plans, just randomness that felt like fate's gentle nudge reminding us that some connections are too strong to be broken by time or distance. And it felt different—not just seeing you, but truly having you in my life again, not as a memory but as a present, living reality.</p>
        <p className="story-line">That unexpected meeting reminded me that some connections don't fade with distance or time. They wait quietly, patiently, for the right moment to remind you why they were worth everything—the fear, the waiting, the uncertainty. All of it was worth it for that moment at Lanka Gate when randomness stopped feeling random and started feeling like destiny.</p>
      </StorySection>

      {/* Perfect Moment */}
      <StorySection
        id="perfect-moment"
        title="The Most Perfect Moment"
        date="2 SEPTEMBER 2025"
      >
        <p className="story-line">Laying on your lap while you gently patted my hair, the world reduced to nothing but the sound of your breathing and the soft music playing in the background—that moment was everything I never knew I needed and everything I'll always want.</p>
        <p className="story-line">In that stillness, with your fingers running through my hair and songs weaving a soundtrack around us, I understood what perfect peace feels like. It's not the absence of noise, but the presence of the right kind of quiet—the kind that's filled with unspoken understanding and comfort that needs no explanation.</p>
        <p className="story-line">The songs playing weren't just background music; they were the score to the most beautiful scene of my life—me resting in your lap, you caring for me in that tender, unassuming way of yours, and time deciding to slow down just for us.</p>
        <p className="story-line" style={{ fontStyle: 'italic', marginTop: '2rem', color: 'var(--gold)' }}>That moment—with your lap as my pillow and your hand as my comfort—taught me that perfection isn't about grand gestures. It's about finding someone whose presence turns ordinary seconds into extraordinary forever-memories.</p>
        <p className="story-line" style={{ marginTop: '2rem' }}>Till the day we're together, that moment remains the benchmark of perfect peace, the standard by which I measure all other happiness. And I know, with absolute certainty, that any moment with you has the potential to become the new "best moment," because with you, every moment feels like coming home to where I was always meant to be.</p>
      </StorySection>

      <LoveQuiz />
      <PromiseGarden />
      <SecretGallery />
      <MusicPlayer />
      <LoveLetter />
      <TimeCapsule />
      <FinalSection />
    </div>
  );
}

export default App;
