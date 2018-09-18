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
    `#{sync_command}`


    ['anypod', 'demo', 'ctnews'].each do |app|
      target = "/Volumes/RamDisk/#{app}"
      if Dir.exists?(target)
        command = copy_commend("#{target}/node_modules/ct-rn-kit/")
        `#{command}`
      end
    end
  }

end
