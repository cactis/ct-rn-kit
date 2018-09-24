source = "~/_devs/_react/ct-rn-kit"
target = "/Volumes/RamDisk/ct-rn-kit"
`mkdir #{target}` if !Dir.exists?(target)

def copy_commend(target)
  "rsync -avzhPR --delete * \
  --exclude={.git,ios/build,android/app/build,node_modules,package-lock.json} \
  #{target}"
end

sync_command = copy_commend(target)

`#{sync_command}`


guard :shell do

  watch(%r{./*}) {
    # `cd #{target}; rsync -avzhPR *lock* package.json  #{srouce}/`
    `#{sync_command}`

    # ['ctnews', 'anypod', 'demo', 'writus'].each do |app|
      ['writus'].each do |app|
      target = "/Volumes/RamDisk/#{app}"
      if Dir.exists?(target)
        # `open #{target}/node_modules/ct-rn-kit/`
        command = copy_commend("#{target}/node_modules/ct-rn-kit/")
        `#{command}`
      end
    end
  }

end
