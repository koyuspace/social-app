import React, {useState, useEffect, useRef} from 'react'
import {View, StyleSheet, Pressable, Text} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faPlay, faPause, faVolumeUp, faVolumeMute, faRadio} from '@fortawesome/free-solid-svg-icons'
import {colors} from '#/lib/styles'
import {useTheme, atoms} from '#/alf'
import { Button, ButtonIcon } from '#/components/Button'
import { PlayButtonIcon } from '#/components/video/PlayButtonIcon'
import { color } from '#/alf/tokens'

export function Radio() {
    const t = useTheme()
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const streamUrl = 'https://anonradio.net:8443/anonradio'

  useEffect(() => {
    audioRef.current = new Audio(streamUrl)
    audioRef.current.addEventListener('error', () => {
      setError('Failed to play radio stream')
    })

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = async () => {
    try {
      if (!audioRef.current) return

      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        await audioRef.current.play()
        setIsPlaying(true)
      }
    } catch (err) {
      setError('Failed to play radio stream')
      console.error(err)
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !audioRef.current.muted
    setIsMuted(!isMuted)
  }

  return (
    <View style={styles.container}>
      <FontAwesomeIcon 
        icon={faRadio} 
        color={colors.white} 
        style={styles.radioIcon} 
      />
      <View style={styles.controls}>
        <Button onPress={togglePlay} label='' style={styles.playButton} color='secondary' variant='outline'>
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} color={colors.white} />
        </Button>
        <Button
          onPress={toggleMute}
          label=''
          style={styles.volumeButton}
          color='secondary'
          variant='outline'
        >
          <FontAwesomeIcon 
            icon={isMuted ? faVolumeMute : faVolumeUp} 
            color={colors.white} 
          />
        </Button>
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: "#361e30",
    borderRadius: 8,
    margin: 10,
    marginTop: 24,
    gap: 15,
  },
  controls: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  radioIcon: {
    opacity: 0.8,
    width: 20,
    height: 20,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
  },
  error: {
    fontSize: 14,
    color: 'red',
  },
  volumeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})