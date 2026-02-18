import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const HelloWorld: React.FC = () => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames } = useVideoConfig();

    const opacity = Math.min(1, frame / 30);
    const scale = 1 + frame / durationInFrames * 0.2;

    return (
        <AbsoluteFill
            style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 80,
            }}
        >
            <div style={{ opacity, transform: `scale(${scale})` }}>
                <h1 style={{ color: '#0070f3', fontFamily: 'sans-serif', margin: 0 }}>
                    Appartamenti Tenerife
                </h1>
                <p style={{ fontSize: 40, color: '#666', marginTop: 20 }}>
                    Vista Mare Mozzafiato
                </p>
                <div style={{ 
                    marginTop: 50, 
                    backgroundColor: '#ff4d4d', 
                    color: 'white', 
                    padding: '15px 40px', 
                    borderRadius: 50,
                    fontSize: 30,
                    cursor: 'pointer'
                }}>
                    Prenota Ora
                </div>
            </div>
        </AbsoluteFill>
    );
};
