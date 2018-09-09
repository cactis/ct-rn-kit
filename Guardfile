target = "/Volumes/RamDisk/ct-rn-kit"
`mkdir #{target}` if !Dir.exists?(target)

sync_command = "rsync -avzhPR --delete * \
  --exclude={.git,ios/build,android/app/build,node_modules,package-lock.json} \
  #{target}"

`#{sync_command}`

guard :shell do

  watch(%r{./*}) {
    `#{sync_command}`
  }

end
